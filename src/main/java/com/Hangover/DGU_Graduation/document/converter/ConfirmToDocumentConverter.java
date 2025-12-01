package com.Hangover.DGU_Graduation.document.converter;

import com.Hangover.DGU_Graduation.document.DraftStore;
import com.Hangover.DGU_Graduation.document.dto.request.ConfirmRequestDto;
import com.Hangover.DGU_Graduation.document.dto.response.DocumentResponseDto;
import com.Hangover.DGU_Graduation.document.service.DocumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConfirmToDocumentConverter {

    private final DraftStore draftStore;
    private final DocumentService documentService;

    public DocumentResponseDto convert(ConfirmRequestDto req, Long userId) {

        var draft = draftStore.get(userId);
        if (draft == null) {
            throw new IllegalArgumentException("Draft 없음 또는 만료됨 (userId=" + userId + ")");
        }

        var saved = documentService.saveFinal(draft, req);

        draftStore.remove(userId);

        return saved;
    }
}
