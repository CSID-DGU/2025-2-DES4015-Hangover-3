package com.Hangover.DGU_Graduation.document.service;

import com.Hangover.DGU_Graduation.document.DraftStore;
import com.Hangover.DGU_Graduation.document.domain.DocumentEntity;
import com.Hangover.DGU_Graduation.document.dto.request.ConfirmRequestDto;
import com.Hangover.DGU_Graduation.document.dto.response.DocumentResponseDto;
import com.Hangover.DGU_Graduation.document.repository.DocumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class DocumentService {

    private final DocumentRepository repo;

    @Transactional
    public DocumentResponseDto saveFinal(DraftStore.Draft draft, ConfirmRequestDto req) {
        DocumentEntity e = DocumentEntity.builder()
                .curriculumYear(req.getCurriculumYear())
                .category(req.getCategory())
                .title(req.getTitle())
                .originalFilename(draft.getFilename())
                .mimeType(draft.getMimeType())
                .sizeBytes(draft.getSizeBytes())
                .sha256(draft.getSha256())
                .data(draft.getPdfBytes())           // *원본 PDF를 DB에 저장 (원치 않으면 null 처리하고 스토리지 사용)
                .finalText(req.getEditedText())
                .build();

        e = repo.save(e);

        return DocumentResponseDto.builder()
                .id(e.getId())
                .curriculumYear(e.getCurriculumYear())
                .category(e.getCategory())
                .title(e.getTitle())
                .originalFilename(e.getOriginalFilename())
                .build();
    }
}
