package com.Hangover.DGU_Graduation.fastapi.exception;

import com.Hangover.DGU_Graduation.common.exception.CustomException;

public class FastApiException extends CustomException {

    public FastApiException(FastApiErrorCode errorCode) {
        super(errorCode);
    }

    public FastApiException(FastApiErrorCode errorCode, String detailMessage) {
        super(errorCode, detailMessage);
    }
}
