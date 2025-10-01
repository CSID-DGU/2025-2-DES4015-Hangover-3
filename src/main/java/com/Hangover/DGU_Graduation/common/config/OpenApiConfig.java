package com.Hangover.DGU_Graduation.common.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.media.IntegerSchema;
import io.swagger.v3.oas.models.media.Schema;
import io.swagger.v3.oas.models.media.StringSchema;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Hangover API")
                        .description("JWT 기반 인증을 사용하는 API 문서입니다. (현재 Security 미구현 상태)")
                        .version("v1.0.0"))
                // Swagger UI에 Bearer Auth 입력창 추가
                .addSecurityItem(new SecurityRequirement().addList("Bearer Authentication"))
                .components(new Components()
                        // JWT Bearer 스키마 정의
                        .addSecuritySchemes("Bearer Authentication",
                                new SecurityScheme()
                                        .name("Authorization")
                                        .description("JWT Bearer 토큰을 입력하세요. (예: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...)")
                                        .type(SecurityScheme.Type.HTTP)
                                        .scheme("bearer")
                                        .bearerFormat("JWT")
                        )
                        // 공통 에러 응답 스키마
                        .addSchemas("ErrorResponse", new Schema<>()
                                .addProperty("status", new IntegerSchema().example(400))
                                .addProperty("code", new StringSchema().example("U001"))
                                .addProperty("message", new StringSchema().example("사용자를 찾을 수 없습니다."))
                        )
                );
    }
}
