package com.Hangover.DGU_Graduation.auth.controller;

import com.Hangover.DGU_Graduation.auth.dto.LoginRequest;
import com.Hangover.DGU_Graduation.auth.dto.SignUpRequest;
import com.Hangover.DGU_Graduation.auth.service.TokenBlacklistService;
import com.Hangover.DGU_Graduation.auth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final TokenBlacklistService tokenBlacklistService;
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> register(@RequestBody SignUpRequest req){
        userService.registerUser(req.getEmail(), req.getPassword());
        return ResponseEntity.ok("회원가입 성공! 이메일을 확인하세요.");
    }

    @GetMapping("/verify")
    public ResponseEntity<String> verify(@RequestParam("token") String token){
        userService.verifyUser(token);
        return ResponseEntity.ok("이메일 인증 완료! 이제 로그인할 수 있습니다.");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest req){
        String jwt = userService.login(req.getEmail(), req.getPassword());
        return ResponseEntity.ok(jwt);
    }

    // ✅ 회원탈퇴 (본인 기준)
    @DeleteMapping("/user/me")
    public ResponseEntity<String> withdraw(@AuthenticationPrincipal UserDetails userDetails) {
        userService.withdraw(userDetails.getUsername());
        return ResponseEntity.ok("회원탈퇴 완료");
    }

    // ✅ 로그아웃 (선택적으로 블랙리스트 처리)
    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String authHeader) {
        // 프론트에서는 토큰 삭제, 서버는 블랙리스트 적용 가능
        return ResponseEntity.ok("로그아웃 성공");
    }

}
