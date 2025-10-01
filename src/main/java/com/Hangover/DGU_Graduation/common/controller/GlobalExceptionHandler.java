package com.Hangover.DGU_Graduation.common.controller;


import com.Hangover.DGU_Graduation.common.dto.ErrorResponse;
import com.Hangover.DGU_Graduation.common.exception.CustomException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;
import java.util.Objects;
import java.util.Optional;

/**
 * 전역 예외 처리기(Global Exception Handler)
 */
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    //CustomException 던져지면 메소드 호출
    @ExceptionHandler(CustomException.class)
    public ResponseEntity<ErrorResponse> handleCustomException(CustomException e) {
        // 예외 정보 로그
        log.warn("CustomException: code={}, msg={}", e.getErrorCode().getCode(), e.getMessage());

        // ErrorCode 내부에 미리 정의된 HTTP 상태를 사용하여 응답 생성
        return ResponseEntity
                .status(e.getErrorCode().getStatus())          // 400, 401, 404 등
                .body(ErrorResponse.of(e.getErrorCode()));     // 통일된 포맷의 에러 응답 바디
    }

    // @Valid 검증 실패
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationException(MethodArgumentNotValidException e) {
        String fallback = "요청 값이 올바르지 않습니다.";
        var fieldErrors = e.getBindingResult().getFieldErrors();

        //대표메시지 뽑기
        String topMessage = fieldErrors.isEmpty()
                ? fallback
                : Optional.ofNullable(fieldErrors.get(0).getDefaultMessage())
                .filter(msg -> !msg.isBlank())
                .orElse(fallback);

        //로그용 상세 메시지
        var detailsForLog = fieldErrors.stream()
                .map(fe -> Map.of(
                        "field", fe.getField(),
                        "rejected", maskIfSensitive(fe.getField(), fe.getRejectedValue()),
                        "message", Objects.requireNonNull(fe.getDefaultMessage())
                ))
                .toList();

        log.debug("Validation failed: topMessage={}, details={}", topMessage, detailsForLog);

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new ErrorResponse(400, "C001", topMessage));
    }

    //지원하지 않는 메서드
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<ErrorResponse> handleMethodNotSupported(HttpRequestMethodNotSupportedException e) {
        log.warn("Method not supported: {}", e.getMethod());
        return ResponseEntity
                .status(HttpStatus.METHOD_NOT_ALLOWED)
                .body(new ErrorResponse(405, "M001", "지원하지 않는 HTTP 메서드입니다."));
    }

    // JSON parse 에러
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponse> handleMessageNotReadable(HttpMessageNotReadableException e) {
        log.warn("Message not readable: {}", e.getMessage());
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new ErrorResponse(400, "J001", "잘못된 요청 형식입니다."));
    }

    // 예상 못한 예외 (서버 에러)
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleException(Exception e) {
        log.error("Unexpected exception", e);
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ErrorResponse(500, "E999", "서버 내부 오류가 발생했습니다."));
    }

    // 유틸: 민감값 마스킹
    private String maskIfSensitive(String field, Object rejected) {
        if (field == null) return "";
        String f = field.toLowerCase();
        if (f.contains("password") || f.contains("pwd")) return "****";
        return rejected == null ? "" : String.valueOf(rejected);
    }


}
