package com.Hangover.DGU_Graduation.document.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ParseResponseDto {

    private String parsedText;   // 파싱된 텍스트
    private int pageCount;
    private String filename;
    private long sizeBytes;
    private String mimeType;

    private Long userId;         // 프론트 참고용
}
