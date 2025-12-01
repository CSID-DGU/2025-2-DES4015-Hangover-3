package com.Hangover.DGU_Graduation.fastapi.service;

import com.Hangover.DGU_Graduation.common.exception.CustomException;
import com.Hangover.DGU_Graduation.fastapi.domain.UserCompleted;
import com.Hangover.DGU_Graduation.fastapi.domain.UserInfo;
import com.Hangover.DGU_Graduation.fastapi.dto.request.*;
import com.Hangover.DGU_Graduation.fastapi.exception.FastApiErrorCode;
import com.Hangover.DGU_Graduation.fastapi.repository.UserCompletedRepository;
import com.Hangover.DGU_Graduation.fastapi.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
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

    // ---------------------------------------------------------
    // ⭐ 추천 API (/recommend)
    // ---------------------------------------------------------
    public Map<String, Object> recommend(Long userId) {

        // 1) 학사 기본 정보 조회 (없으면 에러)
        UserInfo userInfo = userInfoRepository.findByUserId(userId)
                .orElseThrow(() ->
                        new CustomException(FastApiErrorCode.USER_INFO_NOT_FOUND,
                                "UserInfo 데이터가 없습니다. userId = " + userId));

        // 2) 수강 내역 조회 (없으면 에러)
        List<UserCompleted> completedList = userCompletedRepository.findByUserId(userId);
        if (completedList.isEmpty()) {
            throw new CustomException(FastApiErrorCode.USER_COMPLETED_NOT_FOUND,
                    "수강 내역(UserCompleted)이 없습니다. userId = " + userId);
        }

        // 3) FastAPI에 넘길 DTO 조립
        StudentRequest studentReq = buildStudentRequest(userInfo);
        CompletedRequest completedReq = buildCompletedRequest(completedList);

        List<String> takenCourses = completedList.stream()
                .map(UserCompleted::getCourseNo)
                .toList();

        RecommendRequest req = new RecommendRequest();
        req.setStudent(studentReq);
        req.setCompleted(completedReq);
        req.setTaken_courses(takenCourses);
        req.setInterests("AI"); // TODO: 희망 진로 컬럼 생기면 거기 값으로 세팅

        // 4) FastAPI 호출 (에러 시 CustomException 래핑)
        return webClientBuilder.baseUrl(FASTAPI_URL)
                .build()
                .post()
                .uri("/recommend")
                .bodyValue(req)
                .retrieve()
                .onStatus(
                        HttpStatusCode::isError,
                        clientResponse -> clientResponse.bodyToMono(String.class)
                                .map(body -> new CustomException(
                                        FastApiErrorCode.FASTAPI_REQUEST_FAILED,
                                        "FastAPI /recommend 호출 실패. status=" +
                                                clientResponse.statusCode().value() +
                                                ", body=" + body
                                ))
                )
                .bodyToMono(Map.class)
                .block();
    }

    // ---------------------------------------------------------
    // ⭐ 비교 API (/compare)
    // ---------------------------------------------------------
    public Map<String, Object> compare(Long userId) {

        // 1) 학사 기본 정보 조회 (없으면 에러)
        UserInfo userInfo = userInfoRepository.findByUserId(userId)
                .orElseThrow(() ->
                        new CustomException(FastApiErrorCode.USER_INFO_NOT_FOUND,
                                "UserInfo 데이터가 없습니다. userId = " + userId));

        // 2) 수강 내역 조회 (없으면 에러)
        List<UserCompleted> completedList = userCompletedRepository.findByUserId(userId);
        if (completedList.isEmpty()) {
            throw new CustomException(FastApiErrorCode.USER_COMPLETED_NOT_FOUND,
                    "수강 내역(UserCompleted)이 없습니다. userId = " + userId);
        }

        // 3) FastAPI에 넘길 DTO 조립
        StudentRequest studentReq = buildStudentRequest(userInfo);
        CompletedRequest completedReq = buildCompletedRequest(completedList);

        CompareRequest req = new CompareRequest();
        req.setStudent(studentReq);
        req.setCompleted(completedReq);

        // 4) FastAPI 호출 (에러 시 CustomException 래핑)
        return webClientBuilder.baseUrl(FASTAPI_URL)
                .build()
                .post()
                .uri("/compare")
                .bodyValue(req)
                .retrieve()
                .onStatus(
                        HttpStatusCode::isError,
                        clientResponse -> clientResponse.bodyToMono(String.class)
                                .map(body -> new CustomException(
                                        FastApiErrorCode.FASTAPI_REQUEST_FAILED,
                                        "FastAPI /compare 호출 실패. status=" +
                                                clientResponse.statusCode().value() +
                                                ", body=" + body
                                ))
                )
                .bodyToMono(Map.class)
                .block();
    }

    // ---------------------------------------------------------
    // 🔧 StudentRequest 생성 (UserInfo → StudentRequest)
    // ---------------------------------------------------------
    private StudentRequest buildStudentRequest(UserInfo info) {

        StudentRequest student = new StudentRequest();
        student.setId(info.getStudentId());          // 학번
        student.setProgram(info.getProgram());       // 전공명
        student.setCatalog_year(info.getCatalogYear());

        StudentRequest.Flags flags = new StudentRequest.Flags();
        flags.setToeic(info.getToeic());             // 토익 점수
        student.setFlags(flags);

        return student;
    }

    // ---------------------------------------------------------
    // 🔧 CompletedRequest 생성 (UserCompleted 리스트 → CompletedRequest)
    // ---------------------------------------------------------
    private CompletedRequest buildCompletedRequest(List<UserCompleted> completedList) {

        List<CompletedRowRequest> rows = completedList.stream()
                .map(c -> {
                    CompletedRowRequest r = new CompletedRowRequest();
                    r.setCourse_no(c.getCourseNo());
                    r.setCourse_name(c.getCourseNo());   // TODO: 과목명 컬럼 생기면 교체
                    r.setCredits(c.getCredit());
                    r.setArea(c.getArea());
                    r.setEnglish_yn(c.getEnglishYn());
                    return r;
                })
                .toList();

        CompletedRequest completed = new CompletedRequest();
        completed.setTotal_credits(
                rows.stream()
                        .mapToInt(CompletedRowRequest::getCredits)
                        .sum()
        );
        completed.setTable_rows(rows);

        return completed;
    }
}
