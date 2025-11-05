package com.Hangover.DGU_Graduation.courseupdate.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "course_version")
public class CourseVersion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long versionId;

    @Column(name = "course_id")
    private String courseId;           // 변경된 학수번호

    @Column(name = "previous_course_id")
    private String previousCourseId;   // 기존 학수번호

    @Column(name = "change_type")
    private String changeType;         // 변경 유형 (예: 이름변경, 학수번호변경)

    @Column(name = "change_year")
    private Integer changeYear;        // 변경 연도

    @Column(name = "notes")
    private String notes;              // 비고

    @Column(name = "major_id")
    private String majorId;            // 전공 ID

    @Column(name = "prerequisite")
    private String prerequisite;       // 선수과목
}
