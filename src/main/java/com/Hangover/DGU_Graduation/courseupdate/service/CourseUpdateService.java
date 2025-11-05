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

    // ⚙️ 최근 실행 로그 5개 반환
    public List<CourseUpdateLog> getRecentLogs() {
        return logRepository.findTop5ByOrderByExecutedAtDesc();
    }
    @Transactional
    public void updateCoursesFromVersion() {

        List<CourseVersion> versions = courseVersionRepository.findAll();

        for (CourseVersion v : versions) {
            Course oldCourse = courseRepository.findById(v.getPreviousCourseId()).orElse(null);
            if (oldCourse == null) continue;

            String type = v.getChangeType();

            // 🔹 1. 학수번호 변경
            if ("학수번호변경".equals(type)) {
                courseRepository.deleteById(v.getPreviousCourseId());
                courseRepository.flush();

                Course updated = Course.builder()
                        .courseId(v.getCourseId())  // 새로운 학수번호
                        .courseName(oldCourse.getCourseName())
                        .credit(oldCourse.getCredit())
                        .courseType(oldCourse.getCourseType())
                        .isForce(oldCourse.isForce())
                        .isEng(oldCourse.isEng())
                        .majorId(v.getMajorId() != null ? v.getMajorId() : oldCourse.getMajorId())
                        .prerequisite(v.getPrerequisite() != null ? v.getPrerequisite() : oldCourse.getPrerequisite())
                        .build();

                courseRepository.saveAndFlush(updated);
                log.info("✅ 학수번호 변경 반영: {} → {}", v.getPreviousCourseId(), v.getCourseId());
            }

            // 🔹 2. 이름 변경
            else if ("이름변경".equals(type)) {
                String note = v.getNotes();
                if (note != null && note.contains("→")) {
                    String[] parts = note.split("→");
                    String newName = parts[1].trim(); // 오른쪽 부분
                    oldCourse.setCourseName(newName);
                } else {
                    // 혹시 "→"가 없는 경우는 notes 전체를 이름으로 사용
                    oldCourse.setCourseName(note != null ? note.trim() : oldCourse.getCourseName());
                }

                courseRepository.saveAndFlush(oldCourse);
                log.info(" 이름 변경 반영: {} → {}", v.getPreviousCourseId(), oldCourse.getCourseName());
            }


            // 🔹 3. 필수여부 변경
            else if ("필수여부변경".equals(type)) {
                oldCourse.setForce(!oldCourse.isForce());
                courseRepository.saveAndFlush(oldCourse);
                log.info("✅ 필수여부 변경 반영: {} → {}", v.getPreviousCourseId(), oldCourse.isForce());
            }

            // 🔹 4. 신규 개설
            else if ("신규개설".equals(type)) {
                Course newCourse = Course.builder()
                        .courseId(v.getCourseId())
                        .courseName(v.getNotes() != null ? v.getNotes() : "새 과목")
                        .credit(3)
                        .courseType("전문")
                        .isForce(false)
                        .isEng(false)
                        .majorId(v.getMajorId())
                        .build();
                courseRepository.saveAndFlush(oldCourse);
                log.info("✅ 이름 변경 반영: {} → {}", v.getPreviousCourseId(), oldCourse.getCourseName());
            }
        }

        // 실행 로그 기록
        CourseUpdateLog logEntry = CourseUpdateLog.builder()
                .executedAt(LocalDateTime.now())
                .success(true)
                .message("교과목 변경(학수번호·이름 등) 반영 완료")
                .build();
        logRepository.save(logEntry);
    }

}
