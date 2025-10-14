package com.Hangover.DGU_Graduation.auth.entity;

import com.Hangover.DGU_Graduation.common.domain.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "users")
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    private String name;
    /**
     * 계정 활성화 여부
     * - 회원가입 직후: false (이메일 인증 필요)
     * - 이메일 인증 완료: true
     * - 회원탈퇴 시: false + deletedAt 기록
     */
    private boolean enabled = false;

    /**
     * 회원 탈퇴 일시
     * - null이면 정상 계정
     * - 값이 있으면 탈퇴 처리된 계정
     */
    private LocalDateTime deletedAt;
}
