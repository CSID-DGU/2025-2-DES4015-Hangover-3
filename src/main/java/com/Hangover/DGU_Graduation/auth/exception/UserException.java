package com.Hangover.DGU_Graduation.auth.exception;

import com.Hangover.DGU_Graduation.common.exception.CustomException;
import com.Hangover.DGU_Graduation.common.exception.ErrorCode;

public class UserException extends CustomException {

    public UserException(ErrorCode errorCode) {
        super(errorCode);
    }

    public UserException(ErrorCode errorCode,String message) {
        super(errorCode,message);
    }
}