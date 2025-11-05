package com.Hangover.DGU_Graduation.document.dto.response;

import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ParseResponseDto {
    private String sessionId;     // 임시 세션 키
    private String parsedText;    // 서버가 파싱한 텍스트
    private int pageCount;
    private String filename;
    private long sizeBytes;
    private String mimeType;
}
