package com.Hangover.DGU_Graduation.auth.repository;

import com.Hangover.DGU_Graduation.auth.entity.RefreshToken;
import com.Hangover.DGU_Graduation.auth.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByToken(String token);
    Optional<RefreshToken> findByUser(User user);
    void deleteByUser(User user);
}
