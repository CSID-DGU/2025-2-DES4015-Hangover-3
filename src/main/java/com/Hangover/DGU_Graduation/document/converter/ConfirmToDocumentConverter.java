package com.Hangover.DGU_Graduation.document.converter;

import com.Hangover.DGU_Graduation.document.DraftStore;
import com.Hangover.DGU_Graduation.document.dto.request.ConfirmRequestDto;
import com.Hangover.DGU_Graduation.document.dto.response.DocumentResponseDto;
import com.Hangover.DGU_Graduation.document.service.DocumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import com.Hangover.DGU_Graduation.fastapi.repository.UserInfoRepository;

@Component
@RequiredArgsConstructor
public class ConfirmToDocumentConverter {

    private final DraftStore draftStore;
    private final DocumentService documentService;

    /**
     * sessionId 제거 → userId 기반으로 draft 조회
     */
    public DocumentResponseDto convert(ConfirmRequestDto req, Long userId) {

        DraftStore.Draft draft = draftStore.get(userId);
        if (draft == null) {
            throw new IllegalArgumentException("Draft 없음 또는 만료됨 (userId = " + userId + ")");
        }

        // DocumentEntity 저장
        var saved = documentService.saveFinal(draft, req);

        // draft 삭제
        draftStore.remove(userId);

        return saved;
    }
}
