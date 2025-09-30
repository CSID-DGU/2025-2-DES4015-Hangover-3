package com.Hangover.DGU_Graduation.auth.controller;

import com.Hangover.DGU_Graduation.auth.dto.LoginRequest;
import com.Hangover.DGU_Graduation.auth.dto.SignUpRequest;
import com.Hangover.DGU_Graduation.auth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

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
}
