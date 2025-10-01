package com.Hangover.DGU_Graduation.auth.controller;

import com.Hangover.DGU_Graduation.auth.dto.JwtResponse;
import com.Hangover.DGU_Graduation.auth.dto.LoginRequest;
import com.Hangover.DGU_Graduation.auth.dto.RefreshRequest;
import com.Hangover.DGU_Graduation.auth.security.UserPrincipal;
import com.Hangover.DGU_Graduation.auth.service.UserService;
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
    public ResponseEntity<String> register(@RequestBody LoginRequest req){
        userService.registerUser(req.getEmail(), req.getPassword());
        return ResponseEntity.ok("회원가입 성공! 이메일을 확인하세요.");
    }

    @GetMapping("/verify")
    public ResponseEntity<String> verify(@RequestParam("token") String token){
        userService.verifyUser(token);
        return ResponseEntity.ok("이메일 인증 완료! 이제 로그인할 수 있습니다.");
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest req){
        return ResponseEntity.ok(userService.login(req.getEmail(), req.getPassword()));
    }

    @PostMapping("/refresh")
    public ResponseEntity<JwtResponse> refresh(@RequestBody RefreshRequest req){
        return ResponseEntity.ok(userService.reissue(req.getRefreshToken()));
    }

    @DeleteMapping("/user/me")
    public ResponseEntity<Void> withdraw(@AuthenticationPrincipal UserPrincipal principal) {
        userService.withdraw(principal.getUser().getId());
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(@AuthenticationPrincipal UserPrincipal principal) {
        userService.logout(principal.getUsername());
        return ResponseEntity.noContent().build();
    }
}
