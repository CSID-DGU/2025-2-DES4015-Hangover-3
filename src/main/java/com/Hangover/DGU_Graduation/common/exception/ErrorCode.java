package com.Hangover.DGU_Graduation.common.exception;

public interface ErrorCode {
    int getStatus();
    String getCode();
    String getMessage();
}