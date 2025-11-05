package com.Hangover.DGU_Graduation.auth.config;

import jakarta.mail.internet.MimeMessage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessagePreparator;

import java.io.InputStream;

@Profile("dev") // 개발 환경에서만 적용
@Configuration
public class MockMailConfig {

    @Bean
    public JavaMailSender javaMailSender() {
        return new JavaMailSender() {

            @Override
            public void send(SimpleMailMessage simpleMessage) throws MailException {
                System.out.println("📩 [MOCK MAIL] To: " + String.join(", ", simpleMessage.getTo()));
                System.out.println("Subject: " + simpleMessage.getSubject());
                System.out.println("Text: " + simpleMessage.getText());
            }

            @Override
            public void send(SimpleMailMessage... simpleMessages) throws MailException {
                for (SimpleMailMessage msg : simpleMessages) {
                    send(msg); // 단일 메시지 메서드 재사용
                }
            }

            // MimeMessage 관련 (테스트에선 필요 없으니 더미 구현)
            @Override
            public MimeMessage createMimeMessage() {
                return null;
            }

            @Override
            public MimeMessage createMimeMessage(InputStream contentStream) {
                return null;
            }

            @Override
            public void send(MimeMessage mimeMessage) throws MailException {
                System.out.println("📩 [MOCK MAIL - MIME] called");
            }

            @Override
            public void send(MimeMessage... mimeMessages) throws MailException {
                for (MimeMessage msg : mimeMessages) {
                    send(msg);
                }
            }

            @Override
            public void send(MimeMessagePreparator mimeMessagePreparator) throws MailException {
                System.out.println("📩 [MOCK MAIL - Preparator] called");
            }

            @Override
            public void send(MimeMessagePreparator... mimeMessagePreparators) throws MailException {
                for (MimeMessagePreparator prep : mimeMessagePreparators) {
                    send(prep);
                }
            }
        };
    }
}
