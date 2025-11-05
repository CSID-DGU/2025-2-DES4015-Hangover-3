package com.Hangover.DGU_Graduation.auth.controller;

import com.Hangover.DGU_Graduation.auth.dto.JwtResponse;
import com.Hangover.DGU_Graduation.auth.dto.LoginRequest;
import com.Hangover.DGU_Graduation.auth.dto.RefreshRequest;
import com.Hangover.DGU_Graduation.auth.dto.SignUpRequest;
import com.Hangover.DGU_Graduation.auth.security.UserPrincipal;
import com.Hangover.DGU_Graduation.auth.service.UserService;
import com.Hangover.DGU_Graduation.common.dto.ApiResponseDto;
import com.Hangover.DGU_Graduation.common.dto.ErrorResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
@Tag(name = "Auth API", description = "회원 인증 관련 API (회원가입, 로그인, 토큰 재발급 등)")
public class AuthController {

    private final UserService userService;
    @Operation(summary = "회원가입", description = "사용자가 회원가입합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "회원 가입 성공",
                    content = @Content(schema = @Schema(implementation = ApiResponseDto.class))),
            @ApiResponse(responseCode = "400", description = "잘못된 요청",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "401", description = "인증 실패",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
    })
    @PostMapping("/signup")
    public ResponseEntity<ApiResponseDto<Void>> register(@RequestBody SignUpRequest req) {
        userService.registerUser(req.getEmail(), req.getPassword());
        return ResponseEntity.ok(ApiResponseDto.success("회원가입 성공! 이메일을 확인하세요.", null));
    }

    @Operation(summary = "인증", description = "유효한 사용자인지 인증합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "인증 성공",
                    content = @Content(schema = @Schema(implementation = ApiResponseDto.class))),
            @ApiResponse(responseCode = "400", description = "잘못된 요청",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "401", description = "인증 실패",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
    })
    @GetMapping("/verify")
    public ResponseEntity<ApiResponseDto<Void>> verify(@RequestParam("token") String token) {
        userService.verifyUser(token);
        return ResponseEntity.ok(ApiResponseDto.success("이메일 인증 완료!", null));
    }

    @Operation(summary = "로그인", description = "사용자가 로그인합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "로그인 성공",
                    content = @Content(schema = @Schema(implementation = ApiResponseDto.class))),
            @ApiResponse(responseCode = "400", description = "잘못된 요청",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "401", description = "인증 실패",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
    })
    @PostMapping("/login")
    public ResponseEntity<ApiResponseDto<JwtResponse>> login(@RequestBody LoginRequest req) {
        JwtResponse tokens = userService.login(req.getEmail(), req.getPassword());
        return ResponseEntity.ok(ApiResponseDto.success("로그인 성공", tokens));
    }

    @Operation(summary = "리프레쉬 토큰 발급", description = "리프레쉬 토큰을 발급합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "리프레쉬 토큰 발급 성공",
                    content = @Content(schema = @Schema(implementation = ApiResponseDto.class))),
            @ApiResponse(responseCode = "400", description = "잘못된 요청",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "401", description = "인증 실패",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
    })
    @PostMapping("/refresh")
    public ResponseEntity<ApiResponseDto<JwtResponse>> refresh(@RequestBody RefreshRequest req) {
        JwtResponse reissued = userService.reissue(req.getRefreshToken());
        return ResponseEntity.ok(ApiResponseDto.success("AccessToken 재발급 완료", reissued));
    }

    @Operation(summary = "로그아웃", description = "사용자가 로그아웃합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "로그아웃 성공",
                    content = @Content(schema = @Schema(implementation = ApiResponseDto.class))),
            @ApiResponse(responseCode = "400", description = "잘못된 요청",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "401", description = "인증 실패",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
    })
    @PostMapping("/logout")
    public ResponseEntity<ApiResponseDto<Void>> logout(@AuthenticationPrincipal UserPrincipal principal,
                                                       @RequestHeader("Authorization") String authHeader) {
        String accessToken = authHeader.replace("Bearer ", "");
        userService.logout(principal.getUsername(), accessToken);
        return ResponseEntity.ok(ApiResponseDto.success("로그아웃 완료", null));
    }

    @Operation(summary = "회원탈퇴", description = "사용자가 회원탈퇴합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "회원탈퇴 성공",
                    content = @Content(schema = @Schema(implementation = ApiResponseDto.class))),
            @ApiResponse(responseCode = "400", description = "잘못된 요청",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "401", description = "인증 실패",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class)))
    })
    @DeleteMapping("/user/me")
    public ResponseEntity<ApiResponseDto<Void>> withdraw(@AuthenticationPrincipal UserPrincipal principal) {
        userService.withdraw(principal.getUser().getId());
        return ResponseEntity.ok(ApiResponseDto.success("회원탈퇴 완료", null));
    }
}
