package com.Hangover.DGU_Graduation.fastapi.dto.request;

import lombok.Data;
import java.util.List;

@Data
public class RecommendRequest {
    private StudentRequest student;
    private CompletedRequest completed;

    private List<String> taken_courses;   // 추가
    private String interests;             // 추가
}
