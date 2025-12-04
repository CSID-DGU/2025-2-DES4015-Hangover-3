package com.Hangover.DGU_Graduation.fastapi.dto.request;

import lombok.Data;
import java.util.List;

@Data
public class CompletedRequest {
    private int total_credits;
    private List<CompletedRowRequest> table_rows;
}
