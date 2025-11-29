package com.Hangover.DGU_Graduation.fastapi.service;

import com.Hangover.DGU_Graduation.fastapi.dto.request.CompareRequest;
import com.Hangover.DGU_Graduation.fastapi.dto.request.RecommendRequest;
import com.Hangover.DGU_Graduation.fastapi.repository.UserCompletedRepository;
import com.Hangover.DGU_Graduation.fastapi.domain.UserCompleted;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class FastApiClientService {

    private final WebClient.Builder webClientBuilder;
    private final UserCompletedRepository userCompletedRepository;

    private final String FASTAPI_URL = "http://localhost:8000";

    // 🔥 compare 요청
    public Map<String, Object> compare(CompareRequest req) {
        return webClientBuilder
                .baseUrl(FASTAPI_URL)
                .build()
                .post()
                .uri("/compare")
                .bodyValue(req)
                .retrieve()
                .bodyToMono(Map.class)
                .block();
    }

    // 🔥 recommend 요청 + DB에서 들은 과목 조회
    public Map<String, Object> recommend(Long userId, RecommendRequest req) {

        // 1) DB에서 유저 수강 과목 불러오기
        List<String> takenCourses = userCompletedRepository.findByUserId(userId)
                .stream()
                .map(UserCompleted::getCourseNo)
                .toList();

        // 2) Request에 넣기
        req.setTaken_courses(takenCourses);

        // 3) FastAPI로 전송
        return webClientBuilder
                .baseUrl(FASTAPI_URL)
                .build()
                .post()
                .uri("/recommend")
                .bodyValue(req)
                .retrieve()
                .bodyToMono(Map.class)
                .block();
    }
}
