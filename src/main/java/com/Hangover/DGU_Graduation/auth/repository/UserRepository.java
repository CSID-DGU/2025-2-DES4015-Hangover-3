package com.Hangover.DGU_Graduation.auth.repository;

import com.Hangover.DGU_Graduation.auth.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
}
