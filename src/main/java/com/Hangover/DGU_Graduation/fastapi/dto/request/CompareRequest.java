package com.Hangover.DGU_Graduation.fastapi.dto.request;

import lombok.Data;

@Data
public class CompareRequest {
    private StudentRequest student;
    private CompletedRequest completed;
}
