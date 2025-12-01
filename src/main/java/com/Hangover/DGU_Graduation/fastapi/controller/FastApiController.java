package com.Hangover.DGU_Graduation.fastapi.controller;

import com.Hangover.DGU_Graduation.fastapi.dto.request.CompareRequest;
import com.Hangover.DGU_Graduation.fastapi.dto.request.RecommendRequest;
import com.Hangover.DGU_Graduation.fastapi.service.FastApiClientService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/fastapi")
public class FastApiController {

    private final FastApiClientService fastApiService;

    // 비교
    @PostMapping("/recommend/{userId}")
    public Map<String, Object> recommend(@PathVariable Long userId) {
        return fastApiService.recommend(userId);
    }

    @PostMapping("/compare/{userId}")
    public Map<String, Object> compare(@PathVariable Long userId) {
        return fastApiService.compare(userId);
    }

}
