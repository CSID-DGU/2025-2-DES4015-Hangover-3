package com.Hangover.DGU_Graduation.common.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

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

    // --- 정적 팩토리 메서드 ---

    /**
     * 성공 응답 (상태 코드 지정, 메시지는 기본 "성공")
     */
    public static <T> ApiResponseDto<T> success(int status, T data) {
        return new ApiResponseDto<>(status, "성공", data);
    }

    public static <T> ApiResponseDto<T> success(int status, String message, T data) {
        return new ApiResponseDto<>(status, message, data);
    }
}
