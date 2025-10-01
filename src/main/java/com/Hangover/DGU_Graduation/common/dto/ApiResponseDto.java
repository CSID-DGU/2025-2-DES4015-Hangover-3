package com.Hangover.DGU_Graduation.common.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 공통 성공 응답
 */
@Getter
@AllArgsConstructor
public class ApiResponseDto<T> {

    @Schema(description = "HTTP 상태 코드", example = "200")
    private int status;

    @Schema(description = "응답 메시지", example = "성공")
    private String message;

    @Schema(description = "실제 데이터")
    private T data;

    public static <T> ApiResponseDto<T> success(String message, T data) {
        return new ApiResponseDto<>(200, message, data); //성공은 200으로 통일
    }

}
