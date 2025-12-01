package com.Hangover.DGU_Graduation.fastapi.repository;

import com.Hangover.DGU_Graduation.fastapi.domain.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
    Optional<UserInfo> findByUserId(Long userId);
}
