package com.Hangover.DGU_Graduation.auth.config;

import com.Hangover.DGU_Graduation.auth.security.JwtFilter;
import com.Hangover.DGU_Graduation.common.dto.ErrorResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.nio.charset.StandardCharsets;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtFilter jwtFilter;
    private final ObjectMapper objectMapper;

    @Bean
    public AuthenticationEntryPoint restAuthenticationEntryPoint() {
        // 401 Unauthorized (인증 필요/실패)
        return (request, response, authException) -> {
            ErrorResponse body = new ErrorResponse(401, "S002", "인증이 필요합니다.");
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            response.setCharacterEncoding(StandardCharsets.UTF_8.name());
            objectMapper.writeValue(response.getWriter(), body);
        };
    }

    @Bean
    public AccessDeniedHandler restAccessDeniedHandler() {
        // 403 Forbidden (인가 거부)
        return (request, response, accessDeniedException) -> {
            ErrorResponse body = new ErrorResponse(403, "S001", "접근 권한이 없습니다.");
            response.setStatus(HttpStatus.FORBIDDEN.value());
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            response.setCharacterEncoding(StandardCharsets.UTF_8.name());
            objectMapper.writeValue(response.getWriter(), body);
        };
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // CSRF, CORS, 세션 비활성화
                .csrf(csrf -> csrf.disable())
                .cors(Customizer.withDefaults())
                .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .headers(h -> h.frameOptions(f -> f.disable())) // H2 콘솔용

                .authorizeHttpRequests(auth -> auth
                        // OPTIONS (CORS 프리플라이트) 전부 허용
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()

                        // 인증 없이 허용할 엔드포인트
                        .requestMatchers(
                                "/v3/api-docs/**",
                                "/swagger-ui.html",
                                "/swagger-ui/**",
                                "/v1/auth/signup",
                                "/v1/auth/login",
                                "/v1/auth/verify/**",
                                "/error").permitAll()
                                // 그 외는 JWT 인증 필요
                                .anyRequest().authenticated()
                )
                //
                .exceptionHandling(eh -> eh
                        .authenticationEntryPoint(restAuthenticationEntryPoint())
                        .accessDeniedHandler(restAccessDeniedHandler())
                )

                // JWT 필터를 UsernamePasswordAuthenticationFilter 앞에 추가
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
