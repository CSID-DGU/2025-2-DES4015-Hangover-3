package com.Hangover.DGU_Graduation.fastapi.service;

import com.Hangover.DGU_Graduation.fastapi.domain.UserCompleted;
import com.Hangover.DGU_Graduation.fastapi.domain.UserInfo;
import com.Hangover.DGU_Graduation.fastapi.dto.request.*;
import com.Hangover.DGU_Graduation.fastapi.repository.UserCompletedRepository;
import com.Hangover.DGU_Graduation.fastapi.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class FastApiClientService {

    private final WebClient.Builder webClientBuilder;
    private final UserInfoRepository userInfoRepository;
    private final UserCompletedRepository userCompletedRepository;

    private final String FASTAPI_URL = "http://localhost:8000";


    // ========================================================================
    // 🔥 추천 API (/recommend)
    // ========================================================================
    public Map<String, Object> recommend(Long userId) {

        // 1) 유저 학사 정보 조회 → StudentRequest 생성
        UserInfo userInfo = userInfoRepository.findByUserId(userId)
                .orElseThrow();   // Optional<UserInfo> 기준 (Repo에 맞게 조정)

        StudentRequest studentReq = buildStudentRequest(userInfo);

        // 2) 유저 수강 내역으로 CompletedRequest 생성
        List<UserCompleted> completedList = userCompletedRepository.findByUserId(userId);
        CompletedRequest completedReq = buildCompletedRequest(completedList);

        // 3) 들은 과목 번호 리스트 (taken_courses)
        List<String> takenCourses = completedList.stream()
                .map(UserCompleted::getCourseNo)
                .toList();

        // 4) RecommendRequest 조립
        RecommendRequest req = new RecommendRequest();
        req.setStudent(studentReq);
        req.setCompleted(completedReq);
        req.setTaken_courses(takenCourses);
        req.setInterests("AI");  // TODO: 나중에 유저 희망 진로 값으로 변경

        // 5) FastAPI 호출
        return webClientBuilder.baseUrl(FASTAPI_URL)
                .build()
                .post()
                .uri("/recommend")
                .bodyValue(req)
                .retrieve()
                .bodyToMono(Map.class)
                .block();
    }


    // ========================================================================
    // 🔥 비교 API (/compare)
    // ========================================================================
    public Map<String, Object> compare(Long userId) {

        // 1) 학사 정보
        UserInfo userInfo = userInfoRepository.findByUserId(userId)
                .orElseThrow();

        StudentRequest studentReq = buildStudentRequest(userInfo);

        // 2) 수강 내역
        List<UserCompleted> completedList = userCompletedRepository.findByUserId(userId);
        CompletedRequest completedReq = buildCompletedRequest(completedList);

        // 3) CompareRequest 조립
        CompareRequest req = new CompareRequest();
        req.setStudent(studentReq);
        req.setCompleted(completedReq);

        // 4) FastAPI 호출
        return webClientBuilder.baseUrl(FASTAPI_URL)
                .build()
                .post()
                .uri("/compare")
                .bodyValue(req)
                .retrieve()
                .bodyToMono(Map.class)
                .block();
    }


    // ========================================================================
    // 🔧 StudentRequest 생성 (UserInfo → StudentRequest)
    // ========================================================================
    private StudentRequest buildStudentRequest(UserInfo info) {

        StudentRequest student = new StudentRequest();
        student.setId(info.getStudentId());         // 학번
        student.setProgram(info.getProgram());      // 전공
        student.setCatalog_year(info.getCatalogYear());

        StudentRequest.Flags flags = new StudentRequest.Flags();
        flags.setToeic(info.getToeic());            // 토익 점수 or 패스 여부
        student.setFlags(flags);

        return student;
    }


    // ========================================================================
    // 🔧 CompletedRequest 생성 (UserCompleted 리스트 → CompletedRequest)
    // ========================================================================
    private CompletedRequest buildCompletedRequest(List<UserCompleted> completedList) {

        List<CompletedRowRequest> rows = completedList.stream()
                .map(c -> {
                    CompletedRowRequest r = new CompletedRowRequest();
                    r.setCourse_no(c.getCourseNo());
                    r.setCourse_name(c.getCourseNo());
                    r.setCredits(c.getCredit());
                    r.setArea(c.getArea());
                    r.setEnglish_yn(c.getEnglishYn());
                    return r;
                })
                .toList();

        CompletedRequest completed = new CompletedRequest();
        completed.setTotal_credits(rows.stream().mapToInt(CompletedRowRequest::getCredits).sum());
        completed.setTable_rows(rows);

        return completed;
    }

}
