package com.Hangover.DGU_Graduation.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SignUpRequest {
    private String email;
    private String password;
}
