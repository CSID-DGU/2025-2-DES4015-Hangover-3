package com.Hangover.DGU_Graduation.auth.service;

import com.Hangover.DGU_Graduation.auth.dto.JwtResponse;
import com.Hangover.DGU_Graduation.auth.entity.User;
import com.Hangover.DGU_Graduation.auth.entity.VerificationCode;
import com.Hangover.DGU_Graduation.auth.exception.UserException;
import com.Hangover.DGU_Graduation.auth.repository.UserRepository;
import com.Hangover.DGU_Graduation.auth.repository.VerificationCodeRepository;
import com.Hangover.DGU_Graduation.auth.security.JwtProvider;
import com.Hangover.DGU_Graduation.common.exception.CustomException;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.SimpleMailMessage;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ThreadLocalRandom;

import static com.Hangover.DGU_Graduation.auth.exception.UserErrorCode.*;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;
    private final VerificationCodeRepository verificationCodeRepository;
    private final PasswordEncoder passwordEncoder;
    private final JavaMailSender mailSender;
    private final JwtProvider jwtProvider;

    @Value("${app.mail.from}")
    private String appMailFrom;

    private final Set<String> blacklistedTokens = ConcurrentHashMap.newKeySet();

    // --------------------------
    // 인증코드 전송
    // --------------------------
    @Transactional
    public void sendVerificationCode(String email) {

        if (!email.endsWith("@dgu.ac.kr"))
            throw new CustomException(INVALID_INPUT_EMAIL, "동국대 이메일만 사용 가능합니다.");

        // 기존 인증코드 모두 무효 처리
        verificationCodeRepository.findAllByEmail(email)
                .forEach(c -> c.setUsed(true));

        String code = generateCode(5);

        VerificationCode entity = VerificationCode.builder()
                .email(email)
                .code(code)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(5))
                .used(false)
                .build();

        verificationCodeRepository.save(entity);

        sendEmail(email, code);
    }

    private void sendEmail(String email, String code){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("[동국대 학점관리 서비스] 이메일 인증코드");
        message.setText("""
                아래 5자리 인증코드를 입력해주세요:

                인증코드: %s

                (유효시간 5분)
                """.formatted(code));
        message.setFrom(appMailFrom);
        mailSender.send(message);
    }

    private String generateCode(int length){
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder sb = new StringBuilder();
        ThreadLocalRandom random = ThreadLocalRandom.current();
        for (int i = 0; i < length; i++) {
            sb.append(chars.charAt(random.nextInt(chars.length())));
        }
        return sb.toString();
    }

    // --------------------------
    // 인증코드 검증
    // --------------------------
    @Transactional
    public void verifyCode(String email, String code) {

        VerificationCode v = verificationCodeRepository
                .findFirstByEmailOrderByCreatedAtDesc(email)
                .orElseThrow(() -> new CustomException(INVALID_INPUT_EMAIL, "인증코드를 먼저 요청해주세요."));

        if (v.isUsed())
            throw new CustomException(INVALID_INPUT_EMAIL, "이미 사용된 인증코드입니다.");

        if (v.getExpiresAt().isBefore(LocalDateTime.now()))
            throw new CustomException(INVALID_INPUT_EMAIL, "인증코드가 만료되었습니다.");

        if (!v.getCode().equals(code))
            throw new CustomException(INVALID_INPUT_EMAIL, "인증코드가 일치하지 않습니다.");

        v.setUsed(true); // 인증 성공
    }

    // --------------------------
    // 회원가입 (2단계)
    // --------------------------
    @Transactional
    public void registerUser(String email, String password){
        if (userRepository.findByEmail(email).isPresent())
            throw new UserException(ALREADY_JOINED, "이미 가입된 이메일입니다.");

        VerificationCode verified = verificationCodeRepository
                .findFirstByEmailOrderByCreatedAtDesc(email)
                .orElseThrow(() -> new CustomException(INVALID_INPUT_EMAIL, "이메일 인증을 먼저 진행해주세요."));

        if (!verified.isUsed())
            throw new CustomException(INVALID_INPUT_EMAIL, "이메일 인증이 완료되지 않았습니다.");

        User user = User.builder()
                .email(email)
                .password(passwordEncoder.encode(password))
                .enabled(true)     // 이미 인증 완료된 이메일이므로 true
                .build();

        userRepository.save(user);
    }

    // --------------------------
    // 로그인
    // --------------------------
    @Transactional
    public JwtResponse login(String email, String rawPassword){
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND, "가입되지 않은 이메일입니다."));

        if (!passwordEncoder.matches(rawPassword, user.getPassword()))
            throw new CustomException(PASSWORD_NOT_EQUAL, "비밀번호가 일치하지 않습니다.");

        String access = jwtProvider.generateAccessToken(email);
        String refresh = jwtProvider.generateRefreshToken(email);

        user.setRefreshToken(refresh);
        return new JwtResponse(access, refresh);
    }

    // --------------------------
    // 토큰 재발급
    // --------------------------
    @Transactional
    public JwtResponse reissue(String refreshToken){
        if (!jwtProvider.isVaild(refreshToken))
            throw new CustomException(EXPIRED_REFRESH_TOKEN, "리프레시 토큰이 유효하지 않습니다.");

        String email = jwtProvider.getSubject(refreshToken);
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND, "사용자 없음"));

        if (user.getRefreshToken() == null)
            throw new CustomException(TOKEN_NOT_FOUND, "저장된 리프레시 토큰이 없습니다.");

        if (!user.getRefreshToken().equals(refreshToken))
            throw new CustomException(TOKEN_MISMATCH, "리프레시 토큰이 일치하지 않습니다.");

        String newAccess = jwtProvider.generateAccessToken(email);
        return new JwtResponse(newAccess, refreshToken);
    }

    // --------------------------
    // 로그아웃
    // --------------------------
    @Transactional
    public void logout(String email, String accessToken){
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND, "사용자 없음"));

        if (blacklistedTokens.contains(accessToken))
            throw new CustomException(INVALID_ACCESS_TOKEN, "이미 로그아웃된 사용자입니다.");

        blacklistedTokens.add(accessToken);
        user.setRefreshToken(null);
    }

    // --------------------------
    // 회원탈퇴
    // --------------------------
    @Transactional
    public void withdraw(Long userId){
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND, "사용자 없음"));
        userRepository.delete(user);
    }

}
