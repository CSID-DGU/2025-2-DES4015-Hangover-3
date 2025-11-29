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
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

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

    /** 1) 회원가입 - 유저 정보만 저장 */
    @Transactional
    public void registerUser(String email, String password){
        if (!email.endsWith("@dgu.ac.kr")) {
            throw new UserException(INVALID_INPUT_EMAIL,"동국대 이메일만 가능합니다.");
        }
        if (userRepository.findByEmail(email).isPresent()) {
            throw new UserException(ALREADY_JOINED, "이미 사용 중인 이메일입니다.");
        }

        User user = User.builder()
                .email(email)
                .password(passwordEncoder.encode(password))
                .enabled(false)
                .build();
        userRepository.save(user);
    }

    /** 2) 이메일 인증코드 발송 */
    @Transactional
    public void sendVerificationCode(String email){
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND, "가입되지 않은 이메일입니다."));

        // 5자리 코드 생성
        String code = generateCode(5);

        // 이전 코드 모두 사용 처리
        verificationCodeRepository.findByUserIdOrderByCreatedAtDesc(user.getId())
                .forEach(c -> c.setUsed(true));

        VerificationCode v = VerificationCode.builder()
                .user(user)
                .code(code)
                .expiresAt(LocalDateTime.now().plusMinutes(5))
                .createdAt(LocalDateTime.now())
                .used(false)
                .build();

        verificationCodeRepository.save(v);

        sendEmail(email, code);
    }

    /** 이메일 발송 */
    private void sendEmail(String email, String code){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("[동국대 학점관리 서비스] 이메일 인증코드");
        message.setText("""
                안녕하세요.

                아래 5자리 인증코드를 입력해주세요:

                인증코드: %s

                5분 이내에 입력해야 합니다.
                """.formatted(code)
        );
        message.setFrom(appMailFrom);
        mailSender.send(message);
    }

    /** 무작위 5자리 영문+숫자 코드 생성 */
    private String generateCode(int length){
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder sb = new StringBuilder();
        ThreadLocalRandom random = ThreadLocalRandom.current();
        for (int i = 0; i < length; i++){
            sb.append(chars.charAt(random.nextInt(chars.length())));
        }
        return sb.toString();
    }

    /** 3) 인증코드 검증 */
    @Transactional
    public void verifyCode(String email, String code){
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND, "가입되지 않은 이메일입니다."));

        VerificationCode v = verificationCodeRepository
                .findFirstByUserIdAndUsedFalseOrderByCreatedAtDesc(user.getId())
                .orElseThrow(() -> new CustomException(INVALID_INPUT_EMAIL, "인증코드를 먼저 요청해주세요."));

        if (v.getExpiresAt().isBefore(LocalDateTime.now()))
            throw new CustomException(INVALID_INPUT_EMAIL, "인증코드가 만료되었습니다.");

        if (!v.getCode().equals(code))
            throw new CustomException(INVALID_INPUT_EMAIL, "인증코드가 일치하지 않습니다.");

        // 성공 처리
        v.setUsed(true);
        user.setEnabled(true);
    }

    /** 로그인 */
    @Transactional
    public JwtResponse login(String email, String rawPassword){
        User user = findUserByEmail(email);

        if (!user.isEnabled())
            throw new CustomException(EMAIL_VERIFICATION_REQUIRED, "이메일 인증이 필요합니다.");

        if (!passwordEncoder.matches(rawPassword, user.getPassword()))
            throw new CustomException(PASSWORD_NOT_EQUAL, "비밀번호가 일치하지 않습니다.");

        String access = jwtProvider.generateAccessToken(user.getEmail());
        String refresh = jwtProvider.generateRefreshToken(user.getEmail());

        user.setRefreshToken(refresh);

        return new JwtResponse(access, refresh);
    }

    /** refresh */
    @Transactional
    public JwtResponse reissue(String refreshToken){
        if (!jwtProvider.isVaild(refreshToken))
            throw new CustomException(EXPIRED_REFRESH_TOKEN, "리프레시 토큰이 유효하지 않습니다.");

        String email = jwtProvider.getSubject(refreshToken);
        User user = findUserByEmail(email);

        if (user.getRefreshToken() == null)
            throw new CustomException(TOKEN_NOT_FOUND, "저장된 리프레시 토큰이 없습니다.");

        if (!user.getRefreshToken().equals(refreshToken))
            throw new CustomException(TOKEN_MISMATCH, "리프레시 토큰이 일치하지 않습니다.");

        String newAccess = jwtProvider.generateAccessToken(email);
        return new JwtResponse(newAccess, refreshToken);
    }

    /** logout */
    @Transactional
    public void logout(String email, String accessToken){
        User user = findUserByEmail(email);

        if (blacklistedTokens.contains(accessToken))
            throw new CustomException(INVALID_ACCESS_TOKEN, "이미 로그아웃된 사용자입니다.");

        blacklistedTokens.add(accessToken);
        user.setRefreshToken(null);
    }

    /** 회원탈퇴 */
    @Transactional
    public void withdraw(Long userId){
        User user = findUserById(userId);
        userRepository.delete(user);
    }

    /** 내부 공통 함수 */
    private User findUserByEmail(String email){
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND, "사용자 없음"));
    }

    private User findUserById(Long userId){
        return userRepository.findById(userId)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND, "사용자 없음"));
    }
}
