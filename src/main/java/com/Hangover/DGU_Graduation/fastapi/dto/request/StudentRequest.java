package com.Hangover.DGU_Graduation.fastapi.dto.request;

import lombok.Data;

@Data
public class StudentRequest {
    private String id;
    private String program;
    private int catalog_year;
    private Flags flags;

    @Data
    public static class Flags {
        private int toeic;
    }
}
