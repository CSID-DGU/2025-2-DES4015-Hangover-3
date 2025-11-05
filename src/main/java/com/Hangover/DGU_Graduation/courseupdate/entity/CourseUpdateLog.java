package com.Hangover.DGU_Graduation.courseupdate.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "course_update_log")
public class CourseUpdateLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "executed_at")
    private LocalDateTime executedAt;   // 실행 시각

    @Column(name = "success")
    private boolean success;            // 성공 여부

    @Column(name = "message")
    private String message;             // 로그 메시지
}
