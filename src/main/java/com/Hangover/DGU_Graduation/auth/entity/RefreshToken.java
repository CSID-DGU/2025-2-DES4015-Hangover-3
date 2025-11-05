package com.Hangover.DGU_Graduation.auth.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @NoArgsConstructor @AllArgsConstructor
@Builder
public class RefreshToken {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String token;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    public void rotate(String newToken) {
        this.token = newToken;
    }
}
