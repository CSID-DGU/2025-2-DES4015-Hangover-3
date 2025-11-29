package com.Hangover.DGU_Graduation.fastapi.dto.request;

import lombok.Data;

@Data
public class CompletedRowRequest {
    private String course_no;
    private String course_name;
    private int credits;
    private String area;
    private String english_yn;
}
