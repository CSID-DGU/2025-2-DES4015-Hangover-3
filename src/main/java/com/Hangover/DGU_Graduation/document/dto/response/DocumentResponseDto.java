package com.Hangover.DGU_Graduation.document.dto.response;

import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class DocumentResponseDto {
    private Long id;
    private Short curriculumYear;
    private String category;
    private String title;
    private String originalFilename;
}
