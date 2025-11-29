package com.Hangover.DGU_Graduation.auth.controller;

import com.Hangover.DGU_Graduation.auth.dto.JwtResponse;
import com.Hangover.DGU_Graduation.auth.dto.LoginRequest;
import com.Hangover.DGU_Graduation.auth.dto.RefreshRequest;
import com.Hangover.DGU_Graduation.auth.dto.SignUpRequest;
import com.Hangover.DGU_Graduation.auth.security.UserPrincipal;
import com.Hangover.DGU_Graduation.auth.service.UserService;
import com.Hangover.DGU_Graduation.common.dto.ApiResponseDto;

import io.swagger.v3.oas.annotations.*;
import io.swagger.v3.oas.annotations.tags.Tag;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

@RestController
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
@Tag(name = "회원가입·로그인 API", description = "이메일 인증 기반 2단계 회원가입 구조")
public class AuthController {

    private final UserService userService;

    @Operation(summary = "1단계: 인증코드 발송", description = "입력한 이메일로 5자리 인증코드를 전송합니다.")
    @PostMapping("/send-code")
    public ResponseEntity<ApiResponseDto<Void>> sendCode(
            @Parameter(description = "가입할 이메일") @RequestParam String email) {

        userService.sendVerificationCode(email);
        return ResponseEntity.ok(ApiResponseDto.success("인증코드가 전송되었습니다.", null));
    }

    @Operation(summary = "1단계: 인증코드 확인", description = "이메일로 전송된 인증코드를 검증합니다.")
    @PostMapping("/verify-code")
    public ResponseEntity<ApiResponseDto<Void>> verifyCode(
            @RequestParam String email,
            @RequestParam String code) {

        userService.verifyCode(email, code);
        return ResponseEntity.ok(ApiResponseDto.success("이메일 인증이 완료되었습니다.", null));
    }

    @Operation(summary = "2단계: 회원가입", description = "인증된 이메일에 대해 최종 회원가입을 진행합니다.")
    @PostMapping("/signup")
    public ResponseEntity<ApiResponseDto<Void>> signup(@RequestBody SignUpRequest req) {
        userService.registerUser(req.getEmail(), req.getPassword());
        return ResponseEntity.ok(ApiResponseDto.success("회원가입이 완료되었습니다!", null));
    }

    @Operation(summary = "로그인", description = "로그인 후 AccessToken + RefreshToken 을 발급합니다.")
    @PostMapping("/login")
    public ResponseEntity<ApiResponseDto<JwtResponse>> login(@RequestBody LoginRequest req) {
        return ResponseEntity.ok(ApiResponseDto.success("로그인 성공",
                userService.login(req.getEmail(), req.getPassword())));
    }

    @Operation(summary = "AccessToken 재발급")
    @PostMapping("/refresh")
    public ResponseEntity<ApiResponseDto<JwtResponse>> refresh(@RequestBody RefreshRequest req) {
        return ResponseEntity.ok(ApiResponseDto.success("토큰 재발급 완료",
                userService.reissue(req.getRefreshToken())));
    }

    @Operation(summary = "로그아웃")
    @PostMapping("/logout")
    public ResponseEntity<ApiResponseDto<Void>> logout(
            @AuthenticationPrincipal UserPrincipal principal,
            @RequestHeader("Authorization") String authHeader) {

        String accessToken = authHeader.replace("Bearer ", "");
        userService.logout(principal.getUsername(), accessToken);
        return ResponseEntity.ok(ApiResponseDto.success("로그아웃 완료", null));
    }

    @Operation(summary = "회원탈퇴")
    @DeleteMapping("/user/me")
    public ResponseEntity<ApiResponseDto<Void>> withdraw(
            @AuthenticationPrincipal UserPrincipal principal) {

        userService.withdraw(principal.getUser().getId());
        return ResponseEntity.ok(ApiResponseDto.success("회원탈퇴 완료", null));
    }
}
