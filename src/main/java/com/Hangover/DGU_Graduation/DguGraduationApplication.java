package com.Hangover.DGU_Graduation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class DguGraduationApplication {

	public static void main(String[] args) {
		SpringApplication.run(DguGraduationApplication.class, args);
	}

}
