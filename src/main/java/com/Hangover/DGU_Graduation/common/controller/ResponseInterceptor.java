package com.Hangover.DGU_Graduation.common.controller;


import com.Hangover.DGU_Graduation.common.dto.ApiResponseDto;
import com.Hangover.DGU_Graduation.common.dto.ErrorResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpResponse;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

@RestControllerAdvice
public class ResponseInterceptor implements ResponseBodyAdvice<Object> {

    @Override
    public boolean supports(MethodParameter returnType, Class converterType) {
        return true; // 모든 컨트롤러 응답에 적용
    }

    @Override
    public Object beforeBodyWrite(Object body,
                                  MethodParameter returnType,
                                  MediaType selectedContentType,
                                  Class selectedConverterType,
                                  ServerHttpRequest request,
                                  ServerHttpResponse response) {

        // Swagger / API 문서 요청은 제외
        String path = request.getURI().getPath();
        if (path.contains("swagger") || path.contains("api-docs") || path.contains("webjars")) {
            return body;
        }

        // 에러 응답은 그대로 전달
        if (body instanceof ErrorResponse || body instanceof ApiResponseDto) {
            return body;
        }

        // 현재 HTTP status
        int status = ((ServletServerHttpResponse) response).getServletResponse().getStatus();

        // ApiResponseDto로 래핑
        ApiResponseDto<Object> apiResponse = ApiResponseDto.success(status, body);

        // String 응답일 경우 Jackson 변환 필요
        if (body instanceof String) {
            try {
                ObjectMapper objectMapper = new ObjectMapper();
                return objectMapper.writeValueAsString(apiResponse);
            } catch (JsonProcessingException e) {
                throw new RuntimeException("String response conversion error", e);
            }
        }

        return apiResponse;
    }
}
