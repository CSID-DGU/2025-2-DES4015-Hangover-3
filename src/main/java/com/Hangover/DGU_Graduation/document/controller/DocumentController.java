package com.Hangover.DGU_Graduation.document.controller;

import com.Hangover.DGU_Graduation.document.DraftStore;
import com.Hangover.DGU_Graduation.document.PdfParser;
import com.Hangover.DGU_Graduation.document.dto.request.ConfirmRequestDto;
import com.Hangover.DGU_Graduation.document.dto.response.DocumentResponseDto;
import com.Hangover.DGU_Graduation.document.dto.response.ParseResponseDto;
import com.Hangover.DGU_Graduation.document.service.DocumentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/documents")
public class DocumentController {

    private final PdfParser pdfParser;
    private final DraftStore draftStore;
    private final DocumentService documentService;

    /** 1) PDF 업로드 → 파싱 → 사용자에게 텍스트 제공(수정 전) */
    @PostMapping(path = "/parse", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ParseResponseDto parse(@RequestPart("file") MultipartFile file) throws Exception {
        var result = pdfParser.parse(file.getInputStream());
        var draft = draftStore.create(file.getBytes(), file.getOriginalFilename(),
                file.getContentType(), result.text, result.pageCount);

        return ParseResponseDto.builder()
                .sessionId(draft.getSessionId())
                .parsedText(draft.getParsedText())
                .pageCount(result.pageCount)
                .filename(draft.getFilename())
                .sizeBytes(draft.getSizeBytes())
                .mimeType(draft.getMimeType())
                .build();
    }

    /** 2) 사용자 수정 후 확정 저장 */
    @PostMapping("/confirm")
    public DocumentResponseDto confirm(@Valid @RequestBody ConfirmRequestDto req) {
        var draft = draftStore.get(req.getSessionId());
        if (draft == null) throw new IllegalArgumentException("세션 만료 또는 존재하지 않음: " + req.getSessionId());

        var saved = documentService.saveFinal(draft, req);
        draftStore.remove(req.getSessionId());
        return saved;
    }
}
