package com.Hangover.DGU_Graduation.document.service;

import com.Hangover.DGU_Graduation.auth.entity.User;
import com.Hangover.DGU_Graduation.auth.repository.UserRepository;
import com.Hangover.DGU_Graduation.document.DraftStore;
import com.Hangover.DGU_Graduation.document.domain.DocumentEntity;
import com.Hangover.DGU_Graduation.document.dto.request.ConfirmRequestDto;
import com.Hangover.DGU_Graduation.document.dto.response.DocumentResponseDto;
import com.Hangover.DGU_Graduation.document.exception.DocumentErrorCode;
import com.Hangover.DGU_Graduation.document.exception.DocumentException;
import com.Hangover.DGU_Graduation.document.repository.DocumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class DocumentService {

    private final DocumentRepository repo;
    private final UserRepository userRepository;

    @Transactional
    public DocumentResponseDto saveFinal(DraftStore.Draft draft, ConfirmRequestDto req) {

        // ⭐ 1) user 조회 실패 → document 전용 예외 처리
        User user = userRepository.findById(draft.getUserId())
                .orElseThrow(() ->
                        new DocumentException(
                                DocumentErrorCode.USER_NOT_FOUND,
                                "userId = " + draft.getUserId())
                );

        try {
            // ⭐ 2) DocumentEntity 생성 및 저장
            DocumentEntity e = DocumentEntity.builder()
                    .user(user)
                    .curriculumYear(req.getCurriculumYear())
                    .category(req.getCategory())
                    .title(req.getTitle())
                    .originalFilename(draft.getFilename())
                    .mimeType(draft.getMimeType())
                    .sizeBytes(draft.getSizeBytes())
                    .sha256(draft.getSha256())
                    .data(draft.getPdfBytes())
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

        } catch (Exception ex) {

            throw new DocumentException(
                    DocumentErrorCode.DOCUMENT_SAVE_FAILED,
                    "문서 저장 실패: " + ex.getMessage()
            );
        }
    }
}
