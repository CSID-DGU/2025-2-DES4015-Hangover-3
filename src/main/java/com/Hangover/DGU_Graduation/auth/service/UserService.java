package com.Hangover.DGU_Graduation.auth.service;

import com.Hangover.DGU_Graduation.auth.entity.User;
import com.Hangover.DGU_Graduation.auth.entity.VerificationToken;
import com.Hangover.DGU_Graduation.auth.repository.UserRepository;
import com.Hangover.DGU_Graduation.auth.repository.VerificationTokenRepository;
import com.Hangover.DGU_Graduation.auth.security.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final VerificationTokenRepository verificationTokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JavaMailSender mailSender;
    private final JwtProvider jwtProvider;

    // 회원가입
    public void registerUser(String email, String password){
        if (!email.endsWith("@dgu.ac.kr")) {
            throw new IllegalArgumentException("동국대학교 이메일(@dgu.ac.kr)만 가입할 수 있습니다.");
        }


        if (userRepository.findByEmail(email).isPresent()) {
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다.");
        }

        User user = new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setEnabled(false);
        userRepository.save(user);

        String token = UUID.randomUUID().toString();
        VerificationToken vToken = new VerificationToken();
        vToken.setToken(token);
        vToken.setUser(user);
        vToken.setExpiryDate(LocalDateTime.now().plusHours(24));
        verificationTokenRepository.save(vToken);

        String link = "http://localhost:8081/v1/auth/verify?token=" + token;
        sendVerificationEmail(email, link);
    }

    // 인증 메일 발송
    private void sendVerificationEmail(String email, String link){
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(email);
            message.setSubject("[동국대 학점관리 서비스] 이메일 인증 안내");
            message.setText(
                    "안녕하세요, 동국대 학점관리 웹서비스입니다.\n\n" +
                            "회원가입을 완료하기 위해 이메일 인증이 필요합니다.\n" +
                            "아래 링크를 클릭하시면 인증이 완료됩니다:\n\n" +
                            link + "\n\n" +
                            "⚠️ 본 메일은 발신 전용이므로 회신하지 마세요.\n" +
                            "만약 본인이 회원가입을 시도하지 않았다면, 이 메일은 무시하셔도 됩니다.\n\n" +
                            "감사합니다."
            );
            message.setFrom("hyl02415@gmail.com");
            mailSender.send(message);

            System.out.println("✅ [DEBUG] 메일 전송 성공 -> " + email);

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("메일 발송 실패: " + e.getMessage(), e);
        }
    }

    // 이메일 인증
    public void verifyUser(String token){
        VerificationToken vToken = verificationTokenRepository.findByToken(token)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않은 토큰입니다."));

        if (vToken.getExpiryDate().isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("토큰이 만료되었습니다.");
        }

        User user = vToken.getUser();
        user.setEnabled(true);
        userRepository.save(user);
    }

    // 로그인
    public String login(String email, String password){
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("사용자 없음"));

        if (!user.isEnabled()) {
            throw new IllegalStateException("이메일 인증이 필요합니다.");
        }

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
        }

        return jwtProvider.generateToken(user.getEmail());
    }

    @Transactional
    public void withdraw(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("사용자 없음"));

        user.setEnabled(false);
        user.setDeletedAt(LocalDateTime.now());
        userRepository.save(user);
    }

}
