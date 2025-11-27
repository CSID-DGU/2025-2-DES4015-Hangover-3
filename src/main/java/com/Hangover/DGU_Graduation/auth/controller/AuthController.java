package com.Hangover.DGU_Graduation.auth.controller;

import com.Hangover.DGU_Graduation.auth.dto.JwtResponse;
import com.Hangover.DGU_Graduation.auth.dto.LoginRequest;
import com.Hangover.DGU_Graduation.auth.dto.RefreshRequest;
import com.Hangover.DGU_Graduation.auth.dto.SignUpRequest;
import com.Hangover.DGU_Graduation.auth.security.UserPrincipal;
import com.Hangover.DGU_Graduation.auth.service.UserService;
import com.Hangover.DGU_Graduation.common.dto.ApiResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponseDto<Void>> register(@RequestBody SignUpRequest req) {
        userService.registerUser(req.getEmail(), req.getPassword());
        return ResponseEntity.ok(ApiResponseDto.success("회원가입 성공! 이메일을 확인하세요.", null));
    }

    @GetMapping("/verify")
    public ResponseEntity<ApiResponseDto<Void>> verify(@RequestParam("token") String token) {
        userService.verifyUser(token);
        return ResponseEntity.ok(ApiResponseDto.success("이메일 인증 완료!", null));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponseDto<JwtResponse>> login(@RequestBody LoginRequest req) {
        JwtResponse tokens = userService.login(req.getEmail(), req.getPassword());
        return ResponseEntity.ok(ApiResponseDto.success("로그인 성공", tokens));
    }

    @PostMapping("/refresh")
    public ResponseEntity<ApiResponseDto<JwtResponse>> refresh(@RequestBody RefreshRequest req) {
        JwtResponse reissued = userService.reissue(req.getRefreshToken());
        return ResponseEntity.ok(ApiResponseDto.success("AccessToken 재발급 완료", reissued));
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponseDto<Void>> logout(@AuthenticationPrincipal UserPrincipal principal,
                                                       @RequestHeader("Authorization") String authHeader) {
        String accessToken = authHeader.replace("Bearer ", "");
        userService.logout(principal.getUsername(), accessToken);
        return ResponseEntity.ok(ApiResponseDto.success("로그아웃 완료", null));
    }

    @DeleteMapping("/user/me")
    public ResponseEntity<ApiResponseDto<Void>> withdraw(@AuthenticationPrincipal UserPrincipal principal) {
        userService.withdraw(principal.getUser().getId());
        return ResponseEntity.ok(ApiResponseDto.success("회원탈퇴 완료", null));
    }
}
