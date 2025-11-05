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
@Table(name = "course")
public class Course {

    @Id
    @Column(name = "course_id", nullable = false)
    private String courseId;       // 학수번호

    @Column(nullable = false)
    private String courseName;     // 과목명

    @Column(nullable = false)
    private int credit;            // 학점

    @Column(name = "course_type")
    private String courseType;     // 과목분류 (전공, 교양 등)

    @Column(name = "is_force")
    private boolean isForce;       // 필수이수 여부

    @Column(name = "is_eng")
    private boolean isEng;         // 영어강의 여부

    @Column(name = "major_id")
    private String majorId;        // 전공 ID

    @Column(name = "prerequisite")
    private String prerequisite;   // 선수과목
}
