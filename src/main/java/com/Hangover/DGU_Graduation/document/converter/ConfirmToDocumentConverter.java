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

    public DocumentResponseDto convert(ConfirmRequestDto req) {
        DraftStore.Draft draft = draftStore.get(req.getSessionId());
        if (draft == null) {
            throw new IllegalArgumentException("세션 만료 또는 존재하지 않음: " + req.getSessionId());
        }

        var saved = documentService.saveFinal(draft, req);
        draftStore.remove(req.getSessionId());
        return saved;
    }
}
