package com.Hangover.DGU_Graduation.document.repository;

import com.Hangover.DGU_Graduation.document.domain.DocumentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<DocumentEntity, Long> {
    boolean existsBySha256(String sha256);
}
