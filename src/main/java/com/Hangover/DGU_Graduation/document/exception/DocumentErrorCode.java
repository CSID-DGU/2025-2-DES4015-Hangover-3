package com.Hangover.DGU_Graduation.document.exception;

import com.Hangover.DGU_Graduation.common.exception.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum DocumentErrorCode implements ErrorCode {

    DRAFT_NOT_FOUND(404, "DRAFT_NOT_FOUND", "Draft 데이터가 존재하지 않습니다."),
    USER_NOT_FOUND(404, "USER_NOT_FOUND", "해당 문서를 저장할 사용자를 찾을 수 없습니다."),
    INVALID_CONFIRM_REQUEST(400, "INVALID_CONFIRM_REQUEST", "ConfirmRequest 데이터가 올바르지 않습니다."),
    DOCUMENT_SAVE_FAILED(500, "DOCUMENT_SAVE_FAILED", "문서를 저장하는 중 오류가 발생했습니다.");

    private final int status;
    private final String code;
    private final String message;
}
