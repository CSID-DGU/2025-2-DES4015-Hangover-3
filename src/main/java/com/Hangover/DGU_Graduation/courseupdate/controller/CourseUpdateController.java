package com.Hangover.DGU_Graduation.courseupdate.controller;

import com.Hangover.DGU_Graduation.courseupdate.entity.CourseUpdateLog;
import com.Hangover.DGU_Graduation.courseupdate.service.CourseUpdateService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Course Update", description = "교과목 자동 갱신 및 로그 관리 API")
@RestController
@RequestMapping("/api/courseupdate")
@RequiredArgsConstructor
public class CourseUpdateController {

    private final CourseUpdateService courseUpdateService;

    @Operation(summary = "최근 배치 실행 로그 5건 조회", description = "배치 실행 이력을 최신순으로 최대 5건까지 조회합니다.")
    @GetMapping("/logs")
    public ResponseEntity<List<CourseUpdateLog>> getRecentLogs() {
        List<CourseUpdateLog> logs = courseUpdateService.getRecentLogs();
        return ResponseEntity.ok(logs);
    }

    @Operation(summary = "수동으로 교과목 배치 실행", description = "자동 배치 주기를 기다리지 않고 즉시 교과목 버전을 업데이트합니다.")
    @GetMapping("/trigger")
    public ResponseEntity<String> triggerUpdate() {
        courseUpdateService.updateCoursesFromVersion();
        return ResponseEntity.ok(" 수동 배치 실행 완료!");
    }
}
