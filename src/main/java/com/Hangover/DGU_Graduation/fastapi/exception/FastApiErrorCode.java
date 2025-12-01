package com.Hangover.DGU_Graduation.fastapi.exception;

import com.Hangover.DGU_Graduation.common.exception.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum FastApiErrorCode implements ErrorCode {

    USER_NOT_FOUND(404, "USER_NOT_FOUND", "유저 정보를 찾을 수 없습니다."),
    USER_INFO_NOT_FOUND(404, "USER_INFO_NOT_FOUND", "UserInfo 데이터가 존재하지 않습니다."),
    USER_COMPLETED_NOT_FOUND(404, "USER_COMPLETED_NOT_FOUND", "수강 내역이 존재하지 않습니다."),
    FASTAPI_REQUEST_FAILED(500, "FASTAPI_REQUEST_FAILED", "FastAPI 호출 실패"),
    INVALID_REQUEST(400, "INVALID_REQUEST", "잘못된 요청입니다.");

    private final int status;     // HTTP Status
    private final String code;    // 에러 코드 문자열
    private final String message; // 에러 메시지
}
