package com.Hangover.DGU_Graduation.fastapi.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserInfo {

    @Id
    private Long userId;           // User.id와 1:1 매핑

    private String studentId;      // 학번
    private String program;        // 전공명
    private int catalogYear;       // 학번년도
    private int toeic;             // 토익점수
}

