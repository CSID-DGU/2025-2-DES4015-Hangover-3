package com.Hangover.DGU_Graduation.courseupdate.repository;

import com.Hangover.DGU_Graduation.courseupdate.entity.CourseUpdateLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CourseUpdateLogRepository extends JpaRepository<CourseUpdateLog,Long> {

    // 마지막 실행 로그 1건 조회
    Optional<CourseUpdateLog> findTopByOrderByExecutedAtDesc();

    // 최근 5건 로그 조회
    List<CourseUpdateLog> findTop5ByOrderByExecutedAtDesc();
}
