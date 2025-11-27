package com.Hangover.DGU_Graduation.common.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.micrometer.common.lang.Nullable;
import org.springframework.core.MethodParameter;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpResponse;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;
import com.Hangover.DGU_Graduation.common.dto.ApiResponseDto;
import com.Hangover.DGU_Graduation.common.dto.ErrorResponse;
import lombok.RequiredArgsConstructor;

import java.nio.charset.StandardCharsets;


@RestControllerAdvice
@RequiredArgsConstructor
public class ResponseInterceptor implements ResponseBodyAdvice<Object> {

    private final ObjectMapper objectMapper;

    @Override
    public boolean supports(MethodParameter returnType,
                            Class<? extends HttpMessageConverter<?>> converterType) {
        // JSON (Jackson) 또는 String 응답만 래핑 대상으로
        return MappingJackson2HttpMessageConverter.class.isAssignableFrom(converterType)
                || StringHttpMessageConverter.class.isAssignableFrom(converterType);
    }

    @Override
    @Nullable
    public Object beforeBodyWrite(@Nullable Object body,
                                  MethodParameter returnType,
                                  MediaType selectedContentType,
                                  Class<? extends HttpMessageConverter<?>> selectedConverterType,
                                  ServerHttpRequest request,
                                  ServerHttpResponse response) {

        // 문서/헬스체크 등 제외
        String path = request.getURI().getPath();
        if (path.startsWith("/v3/api-docs") || path.startsWith("/swagger-ui")
                || path.contains("/webjars") || path.startsWith("/actuator")) {
            return body;
        }

        // 무바디 상태/메서드 제외
        int status = (response instanceof ServletServerHttpResponse)
                ? ((ServletServerHttpResponse) response).getServletResponse().getStatus()
                : 200;
        HttpMethod method = request.getMethod();
        if (HttpMethod.HEAD.equals(method) || status == 204 || status == 205 || status == 304) {
            return body; // 무바디 상태/메서드는 패스
        }

        // 에러 바디/이미 공통응답은 그대로 통과
        if (body instanceof ErrorResponse) {
            // String 컨버터로 내려가는 경우엔 JSON 문자열화
            if (StringHttpMessageConverter.class.isAssignableFrom(selectedConverterType)
                    || returnType.getParameterType() == String.class) {
                response.getHeaders().setContentType(MediaType.APPLICATION_JSON);
                try { return objectMapper.writeValueAsString(body); }
                catch (JsonProcessingException e) { throw new IllegalStateException("serialize ErrorResponse", e); }
            }
            return body;
        }
        if (body instanceof ApiResponseDto<?>) {
            return body; // 컨트롤러에서 직접 래핑한 경우 이중 래핑 방지
        }

        // 2xx 이외의 상태는 래핑하지 않음 (의도적 에러/리다이렉트 포맷 보존)
        if (status < 200 || status >= 300) {
            return body;
        }

        // PDF / 일반 바이너리는 항상 패스 (파일 전송 보존)
        final String subtype = selectedContentType.getSubtype();
        boolean isPdfLike = MediaType.APPLICATION_PDF.includes(selectedContentType) || MediaType.APPLICATION_OCTET_STREAM.includes(selectedContentType);
        if (isPdfLike) {
            return body;
        }

        // 스트리밍/이벤트/리소스/바이너리는 패스 (깨지지 않게)
        boolean isSse = MediaType.TEXT_EVENT_STREAM.includes(selectedContentType); // text/event-stream
        boolean isNdjson = "x-ndjson".equalsIgnoreCase(subtype) || subtype.toLowerCase().contains("ndjson");
        if (isSse || isNdjson
                || body instanceof byte[]
                || body instanceof org.springframework.core.io.Resource
                || body instanceof org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody
                || body instanceof org.springframework.web.servlet.mvc.method.annotation.ResponseBodyEmitter) {
            return body;
        }

        // String 특수 처리: 항상 JSON으로 감싸고 문자열화
        if (StringHttpMessageConverter.class.isAssignableFrom(selectedConverterType)
                || returnType.getParameterType() == String.class) {
            ApiResponseDto<Object> apiResponse = ApiResponseDto.success(body);
            response.getHeaders().setContentType(MediaType.APPLICATION_JSON); // 강제 JSON
            try { return objectMapper.writeValueAsString(apiResponse); }
            catch (JsonProcessingException e) { throw new IllegalStateException("serialize ApiResponseDto", e); }
        }

        // 그 외(Jackson 등)도 무조건 JSON 공통응답으로 감싸고, Content-Type을 JSON으로 강제
        response.getHeaders().setContentType(new MediaType(MediaType.APPLICATION_JSON, StandardCharsets.UTF_8));
        return ApiResponseDto.success(body);

    }
}