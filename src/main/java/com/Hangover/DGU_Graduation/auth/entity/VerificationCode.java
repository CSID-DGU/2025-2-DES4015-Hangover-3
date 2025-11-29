package com.Hangover.DGU_Graduation.auth.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VerificationCode {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code; // 5자리 인증코드

    private LocalDateTime expiresAt; // 만료시간

    private boolean used; // 이미 사용되었는지 여부

    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

}