package com.Hangover.DGU_Graduation.fastapi.repository;

import com.Hangover.DGU_Graduation.fastapi.domain.UserCompleted;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserCompletedRepository extends JpaRepository<UserCompleted, Long> {
    List<UserCompleted> findByUserId(Long userId);
}
