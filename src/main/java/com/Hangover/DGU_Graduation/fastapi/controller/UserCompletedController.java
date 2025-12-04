package com.Hangover.DGU_Graduation.fastapi.controller;

import com.Hangover.DGU_Graduation.auth.security.UserPrincipal;
import com.Hangover.DGU_Graduation.fastapi.dto.request.SaveCompletedRequest;
import com.Hangover.DGU_Graduation.fastapi.service.UserCompletedService;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/completed")
public class UserCompletedController {

    private final UserCompletedService userCompletedService;

    @PostMapping("/save")
    public String save(@AuthenticationPrincipal UserPrincipal principal,
                       @RequestBody SaveCompletedRequest req) {

        Long userId = principal.getUser().getId();
        userCompletedService.saveUserCompleted(userId, req.getTableRows());

        return "OK";
    }
}
