package com.Hangover.DGU_Graduation.auth.exception;

import com.Hangover.DGU_Graduation.common.exception.ErrorCode;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum UserErrorCode implements ErrorCode {

    //유저관련
    INVALID_INPUT_EMAIL(400, "U001", "동국대학교 이메일(@dgu.ac.kr)만 가입할 수 있습니다."),
    INVALID_INPUT_PW(400, "U002", "비밀번호 입력이 올바르지 않습니다."),
    USER_NOT_FOUND(404, "U003", "사용자를 찾을 수 없습니다."),
    PASSWORD_NOT_EQUAL(401, "U004", "패스워드가 일치하지 않습니다."),
    ALREADY_JOINED(409,"U005","이미 유저가 있습니다."),
    EMAIL_VERIFICATION_REQUIRED(401, "U006", "이메일 인증이 필요합니다."),

    // 토큰 관련
    EXPIRED_ACCESS_TOKEN(401, "T001", "Access Token이 만료되었습니다."),
    EXPIRED_REFRESH_TOKEN(401, "T002", "Refresh Token이 만료되었습니다."),
    INVALID_ACCESS_TOKEN(401, "T003", "유효하지 않은 Access Token입니다."),
    INVALID_REFRESH_TOKEN(401, "T004", "유효하지 않은 Refresh Token입니다."),
    TOKEN_NOT_FOUND(400, "T005", "요청에 토큰이 존재하지 않습니다."),
    TOKEN_MISMATCH(403, "T006", "Refresh Token이 서버에 저장된 정보와 일치하지 않습니다.");

    private final int status;
    private final String code;
    private final String message;
}