package com.Hangover.DGU_Graduation.fastapi.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "user_completed")
public class UserCompleted {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String courseNo;
    private Integer credit;
    private String area;
    private String englishYn;
}
