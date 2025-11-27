package com.Hangover.DGU_Graduation.common.domain;

import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

/**
 * BaseTimeEntity 생성
 */
@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class BaseTimeEntity {

    //만든시간
    @CreatedDate
    private LocalDateTime createdAt;

    //수정시간
    @LastModifiedDate
    private LocalDateTime updatedAt;

}