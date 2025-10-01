package com.Hangover.DGU_Graduation;

import com.Hangover.DGU_Graduation.auth.config.JwtProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(JwtProperties.class) // ✅ JwtProperties 값을 yml에서 바인딩
public class DguGraduationApplication {

	public static void main(String[] args) {
		SpringApplication.run(DguGraduationApplication.class, args);
	}
}
