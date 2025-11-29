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
    @PostMapping("/compare")
    public Map<String, Object> compare(@RequestBody CompareRequest request) {
        return fastApiService.compare(request);
    }

    // 추천 (userId 필요)
    @PostMapping("/recommend/{userId}")
    public Map<String, Object> recommend(
            @PathVariable Long userId,
            @RequestBody RecommendRequest request
    ) {
        return fastApiService.recommend(userId, request);
    }
}
