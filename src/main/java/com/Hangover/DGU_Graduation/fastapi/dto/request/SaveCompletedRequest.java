package com.Hangover.DGU_Graduation.fastapi.dto.request;

import lombok.Data;
import java.util.List;

@Data
public class SaveCompletedRequest {
    private List<CompletedRowRequest> tableRows;
}
