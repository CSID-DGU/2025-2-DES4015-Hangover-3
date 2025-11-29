package com.Hangover.DGU_Graduation.auth.controller;

import com.Hangover.DGU_Graduation.auth.dto.JwtResponse;
import com.Hangover.DGU_Graduation.auth.dto.LoginRequest;
import com.Hangover.DGU_Graduation.auth.dto.RefreshRequest;
import com.Hangover.DGU_Graduation.auth.dto.SignUpRequest;
import com.Hangover.DGU_Graduation.auth.security.UserPrincipal;
import com.Hangover.DGU_Graduation.auth.service.UserService;
import com.Hangover.DGU_Graduation.common.dto.ApiResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
@Tag(name = "인증 API", description = "회원가입 / 이메일 인증 / 로그인 / 토큰 재발급 / 로그아웃 API")
public class AuthController {

    private final UserService userService;

    // -----------------------------
    // 회원가입
    // -----------------------------
    @Operation(summary = "회원가입", description = "유저 정보를 저장합니다. 이메일 인증은 별도 API로 요청해야 합니다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "회원가입 성공"),
            @ApiResponse(responseCode = "400", description = "잘못된 요청 또는 이미 가입된 이메일"),
    })
    @PostMapping("/signup")
    public ResponseEntity<ApiResponseDto<Void>> signup(
            @RequestBody SignUpRequest req
    ) {
        userService.registerUser(req.getEmail(), req.getPassword());
        return ResponseEntity.ok(ApiResponseDto.success("회원가입 완료! 이메일 인증을 진행해주세요.", null));
    }

    // -----------------------------
    // 이메일 인증코드 발송
    // -----------------------------
    @Operation(summary = "인증코드 발송", description = "회원가입한 이메일로 5자리 인증코드를 전송합니다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "인증코드 전송 완료"),
            @ApiResponse(responseCode = "404", description = "가입되지 않은 이메일"),
    })
    @PostMapping("/send-code")
    public ResponseEntity<ApiResponseDto<Void>> sendCode(
            @Parameter(description = "회원가입한 이메일") @RequestParam("email") String email
    ) {
        userService.sendVerificationCode(email);
        return ResponseEntity.ok(ApiResponseDto.success("인증코드가 이메일로 전송되었습니다.", null));
    }

    // -----------------------------
    // 인증코드 검증
    // -----------------------------
    @Operation(summary = "인증코드 검증", description = "이메일로 발송된 5자리 인증코드를 검증하고 이메일 인증을 완료합니다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "이메일 인증 완료"),
            @ApiResponse(responseCode = "400", description = "잘못된 코드 또는 만료된 코드"),
    })
    @PostMapping("/verify-code")
    public ResponseEntity<ApiResponseDto<Void>> verifyCode(
            @Parameter(description = "이메일") @RequestParam("email") String email,
            @Parameter(description = "인증코드") @RequestParam("code") String code
    ) {
        userService.verifyCode(email, code);
        return ResponseEntity.ok(ApiResponseDto.success("이메일 인증 완료!", null));
    }

    // -----------------------------
    // 로그인
    // -----------------------------
    @Operation(summary = "로그인", description = "로그인 후 AccessToken + RefreshToken 을 발급합니다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "로그인 성공"),
            @ApiResponse(responseCode = "400", description = "비밀번호 불일치 또는 이메일 미인증"),
    })
    @PostMapping("/login")
    public ResponseEntity<ApiResponseDto<JwtResponse>> login(
            @RequestBody LoginRequest req
    ) {
        JwtResponse tokens = userService.login(req.getEmail(), req.getPassword());
        return ResponseEntity.ok(ApiResponseDto.success("로그인 성공", tokens));
    }

    // -----------------------------
    // 토큰 재발급
    // -----------------------------
    @Operation(summary = "Access Token 재발급", description = "Refresh Token 을 이용해 새로운 Access Token 을 발급합니다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "AccessToken 재발급 성공"),
            @ApiResponse(responseCode = "401", description = "Refresh Token 만료 또는 위조됨"),
    })
    @PostMapping("/refresh")
    public ResponseEntity<ApiResponseDto<JwtResponse>> refresh(
            @RequestBody RefreshRequest req
    ) {
        JwtResponse reissued = userService.reissue(req.getRefreshToken());
        return ResponseEntity.ok(ApiResponseDto.success("AccessToken 재발급 완료", reissued));
    }

    // -----------------------------
    // 로그아웃
    // -----------------------------
    @Operation(summary = "로그아웃", description = "현재 AccessToken 을 블랙리스트에 등록하고 RefreshToken 을 삭제합니다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "로그아웃 완료"),
    })
    @PostMapping("/logout")
    public ResponseEntity<ApiResponseDto<Void>> logout(
            @AuthenticationPrincipal UserPrincipal principal,
            @Parameter(description = "헤더 Authorization: Bearer {token}")
            @RequestHeader("Authorization") String authHeader
    ) {
        String accessToken = authHeader.replace("Bearer ", "");
        userService.logout(principal.getUsername(), accessToken);
        return ResponseEntity.ok(ApiResponseDto.success("로그아웃 완료", null));
    }

    // -----------------------------
    // 회원탈퇴
    // -----------------------------
    @Operation(summary = "회원탈퇴", description = "현재 로그인된 사용자 계정을 삭제합니다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "회원탈퇴 완료")
    })
    @DeleteMapping("/user/me")
    public ResponseEntity<ApiResponseDto<Void>> withdraw(
            @AuthenticationPrincipal UserPrincipal principal
    ) {
        userService.withdraw(principal.getUser().getId());
        return ResponseEntity.ok(ApiResponseDto.success("회원탈퇴 완료", null));
    }
}
