package com.Hangover.DGU_Graduation.common.controller;
import com.Hangover.DGU_Graduation.common.dto.ErrorResponse;
import com.Hangover.DGU_Graduation.common.exception.CustomException;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingRequestHeaderException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.util.*;
import java.util.stream.Collectors;

/**
 * 전역 예외 처리기 (모든 에러는 JSON 으로 응답)
 */
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    // 1)팀 커스텀 예외
    @ExceptionHandler(CustomException.class)
    public ResponseEntity<ErrorResponse> handleCustomException(CustomException e) {
        log.warn("CustomException: code={}, msg={}", e.getErrorCode().getCode(), e.getMessage());
        return ResponseEntity
                .status(e.getErrorCode().getStatus())
                .contentType(MediaType.APPLICATION_JSON) //JSON 형태
                .body(ErrorResponse.of(e.getErrorCode()));
    }

    // 2) @Valid 바디 검증 실패
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationException(MethodArgumentNotValidException e) {
        String fallback = "요청 값이 올바르지 않습니다.";
        List<FieldError> fieldErrors = e.getBindingResult().getFieldErrors();

        // 대표 메시지(첫 에러)
        String topMessage = fieldErrors.isEmpty()
                ? fallback
                : Optional.ofNullable(fieldErrors.get(0).getDefaultMessage())
                .filter(msg -> !msg.isBlank())
                .orElse(fallback);

        // 디버그일 때만 상세 로그 계산 (타입: List<Map<String, Object>> 로 고정)
        if (log.isDebugEnabled()) {
            List<Map<String, Object>> detailsForLog = fieldErrors.stream()
                    .map(fe -> {
                        Map<String, Object> m = new LinkedHashMap<>();
                        m.put("field", fe.getField());
                        m.put("rejected", maskIfSensitive(fe.getField(), fe.getRejectedValue()));
                        m.put("message", Optional.ofNullable(fe.getDefaultMessage()).orElse(""));
                        return m;
                    })
                    .collect(Collectors.toList());
            log.debug("Validation failed: topMessage={}, details={}", topMessage, detailsForLog);
        }

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .contentType(MediaType.APPLICATION_JSON)
                .body(new ErrorResponse("C001", topMessage));
    }

    // 3) 파라미터/경로/쿼리 검증 실패 (@Validated)
    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ErrorResponse> handleConstraintViolation(ConstraintViolationException e) {
        String topMessage = e.getConstraintViolations().stream()
                .findFirst()
                .map(ConstraintViolation::getMessage)
                .filter(m -> !m.isBlank())
                .orElse("요청 파라미터가 올바르지 않습니다.");

        if (log.isDebugEnabled()) {
            List<Map<String, Object>> details = e.getConstraintViolations().stream()
                    .map(cv -> {
                        Map<String, Object> m = new LinkedHashMap<>();
                        m.put("param", String.valueOf(cv.getPropertyPath()));
                        m.put("invalid", maskIfSensitive(String.valueOf(cv.getPropertyPath()), cv.getInvalidValue()));
                        m.put("message", Optional.ofNullable(cv.getMessage()).orElse(""));
                        return m;
                    })
                    .collect(Collectors.toList());
            log.debug("Constraint violation: topMessage={}, details={}", topMessage, details);
        }

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .contentType(MediaType.APPLICATION_JSON)
                .body(new ErrorResponse("C002", topMessage));
    }

    // 4) 타입 변환 실패 (/api?age=abc)
    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handleTypeMismatch(MethodArgumentTypeMismatchException e) {
        log.warn("Type mismatch: name={}, value={}, requiredType={}",
                e.getName(), e.getValue(),
                (e.getRequiredType() != null ? e.getRequiredType().getSimpleName() : "unknown"));

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .contentType(MediaType.APPLICATION_JSON)
                .body(new ErrorResponse("C003", "요청 파라미터 타입이 올바르지 않습니다."));
    }

    // 5) 필수 파라미터 누락
    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<ErrorResponse> handleMissingParam(MissingServletRequestParameterException e) {
        log.warn("Missing request parameter: {}", e.getParameterName());
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .contentType(MediaType.APPLICATION_JSON)
                .body(new ErrorResponse("C004", "필수 요청 파라미터가 누락되었습니다."));
    }

    // 6) 필수 헤더 누락
    @ExceptionHandler(MissingRequestHeaderException.class)
    public ResponseEntity<ErrorResponse> handleMissingHeader(MissingRequestHeaderException e) {
        log.warn("Missing request header: {}", e.getHeaderName());
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .contentType(MediaType.APPLICATION_JSON)
                .body(new ErrorResponse("C005", "필수 요청 헤더가 누락되었습니다."));
    }

    // 7) 메서드 미지원 (405) — allow(...) 는 varargs 이므로 Set -> 배열 변환
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<ErrorResponse> handleMethodNotSupported(HttpRequestMethodNotSupportedException e) {
        log.warn("Method not supported: {}", e.getMethod());

        HttpMethod[] allowed = (e.getSupportedHttpMethods() == null)
                ? new HttpMethod[0]
                : e.getSupportedHttpMethods().toArray(new HttpMethod[0]);

        return ResponseEntity
                .status(HttpStatus.METHOD_NOT_ALLOWED)
                .allow(allowed) // <- 컴파일 오류 해결 포인트
                .contentType(MediaType.APPLICATION_JSON)
                .body(new ErrorResponse("M001", "지원하지 않는 HTTP 메서드입니다."));
    }

    // 8) JSON 파싱/본문 읽기 실패 (400)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponse> handleMessageNotReadable(HttpMessageNotReadableException e) {
        log.warn("Message not readable: {}", rootCauseMessage(e));
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .contentType(MediaType.APPLICATION_JSON)
                .body(new ErrorResponse("J001", "잘못된 요청 형식입니다."));
    }

    // 9) 나머지 모든 예외 (500)
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleException(Exception e) {
        log.error("Unexpected exception", e);
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .contentType(MediaType.APPLICATION_JSON)
                .body(new ErrorResponse("E999", "서버 내부 오류가 발생했습니다."));
    }

    // 민감값 마스킹
    private String maskIfSensitive(String field, Object rejected) {
        if (field == null) return "";
        String f = field.toLowerCase(Locale.ROOT);
        if (f.contains("password") || f.contains("pwd")
                || f.contains("token") || f.contains("secret")
                || f.contains("authorization") || f.contains("apikey") || f.contains("api_key")) {
            return "****";
        }
        return rejected == null ? "" : String.valueOf(rejected);
    }

    // Root cause 메시지 추출
    private String rootCauseMessage(Throwable e) {
        Throwable t = e;
        while (t.getCause() != null && t.getCause() != t) {
            t = t.getCause();
        }
        String msg = t.getMessage();
        return (msg == null || msg.isBlank()) ? t.toString() : msg;
    }
}