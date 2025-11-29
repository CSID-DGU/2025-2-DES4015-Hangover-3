package com.Hangover.DGU_Graduation.auth.repository;

import com.Hangover.DGU_Graduation.auth.entity.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.List;

public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long> {

    // 이메일 기준 최신 인증코드 1개
    Optional<VerificationCode> findFirstByEmailOrderByCreatedAtDesc(String email);

    // 이메일 기준 모든 인증코드 조회 (재발송 시 모두 used 처리용)
    List<VerificationCode> findAllByEmail(String email);
}
