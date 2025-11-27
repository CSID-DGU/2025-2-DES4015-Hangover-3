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

    @Schema(description = "요청 성공 여부", example = "true")
    private final boolean success;

    @Schema(description = "응답 메시지", example = "성공")
    private String message;

    @Schema(description = "실제 데이터")
    private T data;

    // --- 정적 팩토리 메서드 ---

    /**
     * 성공 응답 (상태 코드 지정, 메시지는 기본 "성공")
     */
    public static <T> ApiResponseDto<T> success(T data) {
        return new ApiResponseDto<>(true, "성공", data);
    }

    public static <T> ApiResponseDto<T> success(String message, T data) {
        return new ApiResponseDto<>(true, message, data);
    }

}
