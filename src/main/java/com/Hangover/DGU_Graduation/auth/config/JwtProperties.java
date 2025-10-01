package com.Hangover.DGU_Graduation.auth.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Getter
@Setter
@ConfigurationProperties(prefix = "jwt")
public class JwtProperties {
    private String secret;
    private Expiration expiration = new Expiration();

    @Getter @Setter
    public static class Expiration {
        private long access;
        private long refresh;
    }
}
