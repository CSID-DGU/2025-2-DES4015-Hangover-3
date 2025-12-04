package com.Hangover.DGU_Graduation.document.exception;

import com.Hangover.DGU_Graduation.common.exception.ErrorCode;
import lombok.Getter;

@Getter
public class DocumentException extends RuntimeException {

    private final ErrorCode errorCode;

    public DocumentException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }

    public DocumentException(ErrorCode errorCode, String detail) {
        super(detail);
        this.errorCode = errorCode;
    }
}
