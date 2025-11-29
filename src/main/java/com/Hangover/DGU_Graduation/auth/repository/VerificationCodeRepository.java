package com.Hangover.DGU_Graduation.auth.repository;

import com.Hangover.DGU_Graduation.auth.entity.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long> {
    List<VerificationCode> findByUserIdOrderByCreatedAtDesc(Long userId);

    Optional<VerificationCode> findFirstByUserIdAndUsedFalseOrderByCreatedAtDesc(Long userId);
}
