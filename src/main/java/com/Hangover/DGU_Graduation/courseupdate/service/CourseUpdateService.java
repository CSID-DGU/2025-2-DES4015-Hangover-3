package com.Hangover.DGU_Graduation.courseupdate.service;

import com.Hangover.DGU_Graduation.courseupdate.entity.Course;
import com.Hangover.DGU_Graduation.courseupdate.entity.CourseUpdateLog;
import com.Hangover.DGU_Graduation.courseupdate.entity.CourseVersion;
import com.Hangover.DGU_Graduation.courseupdate.repository.CourseRepository;
import com.Hangover.DGU_Graduation.courseupdate.repository.CourseUpdateLogRepository;
import com.Hangover.DGU_Graduation.courseupdate.repository.CourseVersionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class CourseUpdateService {

    private final CourseRepository courseRepository;
    private final CourseVersionRepository courseVersionRepository;
    private final CourseUpdateLogRepository logRepository;

    public List<CourseUpdateLog> getRecentLogs() {
        return logRepository.findTop5ByOrderByExecutedAtDesc();
    }

    @Transactional
    public void updateCoursesFromVersion() {
        System.out.println("🚀 CourseUpdateService.updateCoursesFromVersion() 호출됨");
        List<CourseVersion> versions = courseVersionRepository.findAll();

        for (CourseVersion v : versions) {
            Course oldCourse = courseRepository.findById(v.getPreviousCourseId()).orElse(null);
            if (oldCourse == null) continue;

            String type = v.getChangeType();

            // 🔹 1. 학수번호 변경 (이름 포함 자동 감지)
            if ("학수번호변경".equals(type) || "학수번호및이름변경".equals(type)) {
                String oldId = v.getPreviousCourseId();
                String newId = v.getCourseId();

                // 이름 변경 감지
                String newName = oldCourse.getCourseName();
                String note = v.getNotes();
                if (note != null && note.contains("→")) {
                    String[] parts = note.split("→");
                    newName = parts[1].trim();
                }

                // 기존 course 삭제 (FK 제약 주의)
                try {
                    courseRepository.delete(oldCourse);
                    courseRepository.flush(); // 즉시 반영
                } catch (Exception e) {
                    log.error("❌ 기존 과목 삭제 실패 (FK 제약 가능성): {}", oldId, e);
                    continue;
                }

                // 새로운 course 생성 및 저장
                Course updated = Course.builder()
                        .courseId(newId)
                        .courseName(newName)
                        .credit(oldCourse.getCredit())
                        .courseType(oldCourse.getCourseType())
                        .isForce(oldCourse.isForce())
                        .isEng(oldCourse.isEng())
                        .majorId(v.getMajorId() != null ? v.getMajorId() : oldCourse.getMajorId())
                        .prerequisite(v.getPrerequisite() != null ? v.getPrerequisite() : oldCourse.getPrerequisite())
                        .build();

                courseRepository.saveAndFlush(updated);
                log.info("✅ 학수번호 및 이름 변경 반영: {}({}) → {}({})", oldId, oldCourse.getCourseName(), newId, newName);
            }

            // 🔹 2. 이름 변경
            else if ("이름변경".equals(type)) {
                String note = v.getNotes();
                if (note != null && note.contains("→")) {
                    String[] parts = note.split("→");
                    String newName = parts[1].trim();
                    oldCourse.setCourseName(newName);
                } else {
                    oldCourse.setCourseName(note != null ? note.trim() : oldCourse.getCourseName());
                }

                courseRepository.saveAndFlush(oldCourse);
                log.info("✅ 이름 변경 반영: {} → {}", v.getPreviousCourseId(), oldCourse.getCourseName());
            }

            // 🔹 3. 필수여부 변경
            else if ("필수여부변경".equals(type)) {
                oldCourse.setForce(!oldCourse.isForce());
                courseRepository.saveAndFlush(oldCourse);
                log.info("✅ 필수여부 변경 반영: {} → {}", v.getPreviousCourseId(), oldCourse.isForce());
            }

            // 🔹 4. 신규 개설
            else if ("신규개설".equals(type)) {
                if (courseRepository.existsById(v.getCourseId())) {
                    log.warn("⚠️ 이미 존재하는 과목: {}", v.getCourseId());
                    continue;
                }

                Course newCourse = Course.builder()
                        .courseId(v.getCourseId())
                        .courseName(v.getNotes() != null ? v.getNotes() : "새 과목")
                        .credit(3)
                        .courseType("전문")
                        .isForce(false)
                        .isEng(false)
                        .majorId(v.getMajorId())
                        .build();

                courseRepository.saveAndFlush(newCourse);
                log.info("✅ 신규 과목 추가: {}", v.getCourseId());
            }
        }

        // 실행 로그 기록
        CourseUpdateLog logEntry = CourseUpdateLog.builder()
                .executedAt(LocalDateTime.now())
                .success(true)
                .message("교과목 변경(학수번호·이름·필수여부·신규개설) 반영 완료")
                .build();
        logRepository.save(logEntry);
    }
}
