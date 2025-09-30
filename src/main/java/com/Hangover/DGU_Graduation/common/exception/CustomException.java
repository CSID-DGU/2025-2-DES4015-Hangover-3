package com.Hangover.DGU_Graduation.common.exception;


import lombok.Getter;

/**
 * CustomException 생성
 */
@Getter
public class CustomException extends RuntimeException {

    //errorCode
    private final ErrorCode errorCode;

    public CustomException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }

    public CustomException(ErrorCode errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }
}