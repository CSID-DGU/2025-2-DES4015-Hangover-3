package com.Hangover.DGU_Graduation.courseupdate.scheduler;

import com.Hangover.DGU_Graduation.courseupdate.service.CourseUpdateService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@Profile("batch") // "batch" 프로파일에서만 실행됨
@RequiredArgsConstructor
public class CourseUpdateScheduler {

    private final CourseUpdateService courseUpdateService;

    // 매월 1일 새벽 3시에 자동 갱신
    @Scheduled(cron = " 0 0 3 1 * *")
    public void autoUpdateCourses() {
        courseUpdateService.updateCoursesFromVersion();
    }
}
