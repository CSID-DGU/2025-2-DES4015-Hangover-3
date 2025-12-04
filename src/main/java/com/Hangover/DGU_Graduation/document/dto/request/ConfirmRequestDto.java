package com.Hangover.DGU_Graduation.document.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ConfirmRequestDto {


    @NotNull
    private Short curriculumYear;

    @NotBlank
    private String title;

    private String category = "졸업요건";

    @NotBlank
    private String editedText; // 사용자가 수정한 텍스트
}
