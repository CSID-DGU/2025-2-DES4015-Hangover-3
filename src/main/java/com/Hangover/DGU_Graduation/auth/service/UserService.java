package com.Hangover.DGU_Graduation.auth.service;

import com.Hangover.DGU_Graduation.auth.dto.JwtResponse;
import com.Hangover.DGU_Graduation.auth.entity.User;
import com.Hangover.DGU_Graduation.auth.entity.VerificationToken;
import com.Hangover.DGU_Graduation.auth.exception.UserException;
import com.Hangover.DGU_Graduation.auth.repository.UserRepository;
import com.Hangover.DGU_Graduation.auth.repository.VerificationTokenRepository;
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
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import static com.Hangover.DGU_Graduation.auth.exception.UserErrorCode.*;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;
    private final VerificationTokenRepository verificationTokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JavaMailSender mailSender;
    private final JwtProvider jwtProvider;

    @Value("${app.host.url}")
    private String appHostUrl;

    @Value("${app.mail.from}")
    private String appMailFrom;

    private final Set<String> blacklistedTokens = ConcurrentHashMap.newKeySet();

    // 회원가입 (이메일 인증 토큰만 생성)
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

        String token = UUID.randomUUID().toString();
        VerificationToken vToken = new VerificationToken();
        vToken.setToken(token);
        vToken.setUser(user);
        vToken.setExpiryDate(LocalDateTime.now().plusHours(24));
        verificationTokenRepository.save(vToken);

        sendVerificationEmail(email, token);
    }

    private void sendVerificationEmail(String email, String token){
        String link = appHostUrl + "/v1/auth/verify?token=" + token;
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("[동국대 학점관리 서비스] 이메일 인증 안내");
        message.setText("""
                안녕하세요, 동국대 학점관리 웹서비스입니다.

                회원가입을 완료하기 위해 이메일 인증이 필요합니다.
                아래 링크를 클릭하시면 인증이 완료됩니다:

                %s

                ⚠️ 본 메일은 발신 전용입니다.
                """.formatted(link));
        message.setFrom(appMailFrom);
        mailSender.send(message);
    }

    // 이메일 인증
    @Transactional
    public void verifyUser(String token){
        var vToken = verificationTokenRepository.findByToken(token)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않은 토큰입니다."));
        if (vToken.getExpiryDate().isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("토큰이 만료되었습니다.");
        }
        User user = vToken.getUser();
        user.setEnabled(true);
        userRepository.save(user);
        verificationTokenRepository.delete(vToken);
    }

    // 로그인: access + refresh 발급
    @Transactional
    public JwtResponse login(String email, String rawPassword){
        User user = findUserByEmail(email);
        if (!user.isEnabled()) throw new CustomException(EMAIL_VERIFICATION_REQUIRED, "이메일 인증이 필요합니다.");
        if (!passwordEncoder.matches(rawPassword, user.getPassword()))
            throw new CustomException(PASSWORD_NOT_EQUAL, "비밀번호가 일치하지 않습니다.");

        String access = jwtProvider.generateAccessToken(user.getEmail());
        String refresh = jwtProvider.generateRefreshToken(user.getEmail());

       user.setRefreshToken(refresh);
       userRepository.save(user);

        return new JwtResponse(access, refresh);
    }

    // 토큰 재발급
    @Transactional
    public JwtResponse reissue(String refreshToken){
        if (!jwtProvider.isVaild(refreshToken)) {
            throw new CustomException(EXPIRED_REFRESH_TOKEN, "리프레시 토큰이 유효하지 않습니다.");
        }

        String email = jwtProvider.getSubject(refreshToken);
        User user = findUserByEmail(email);
        // 저장된 refresh 와 동일한지 확인

        if (user.getRefreshToken() == null)
            throw new CustomException(TOKEN_NOT_FOUND, "저자오딘 리프래시 토큰이 없습니다.");

        if (!user.getRefreshToken().equals(refreshToken))
            throw new CustomException(TOKEN_MISMATCH, "리프래시 토큰이 일치하지 않습니다.");

        String newAccess = jwtProvider.generateAccessToken(email);
        return new JwtResponse(newAccess, refreshToken); // refresh 그대로 유지
    }

    // 로그아웃: refresh 삭제(블랙리스트 불필요)
    @Transactional
    public void logout(String email, String accessToken) {
        User user = findUserByEmail(email);

        if (blacklistedTokens.contains(accessToken))
            throw new CustomException(INVALID_ACCESS_TOKEN, "이미 로그아웃된 사용자입니다.");

        blacklistedTokens.add(accessToken);
        user.setRefreshToken(null);
        userRepository.save(user);
    }

    // 회원탈퇴: id 기준 삭제가 안전
    @Transactional
    public void withdraw(Long userId) {
        User user = findUserById(userId);
        userRepository.delete(user);
    }

    /**
     * private 메소드로 구분
     */
    private User findUserByEmail(String email){
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND, "사용자 없음"));

    }
    private User findUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND, "사용자 없음"));
    }
}
