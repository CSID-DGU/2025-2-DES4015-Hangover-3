package com.Hangover.DGU_Graduation.document.controller;

import com.Hangover.DGU_Graduation.auth.security.UserPrincipal;
import com.Hangover.DGU_Graduation.common.exception.CustomException;
import com.Hangover.DGU_Graduation.document.converter.PdfToDraftConverter;
import com.Hangover.DGU_Graduation.document.converter.ConfirmToDocumentConverter;
import com.Hangover.DGU_Graduation.document.dto.request.ConfirmRequestDto;
import com.Hangover.DGU_Graduation.document.dto.response.DocumentResponseDto;
import com.Hangover.DGU_Graduation.document.dto.response.ParseResponseDto;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

import static com.Hangover.DGU_Graduation.auth.exception.UserErrorCode.USER_NOT_FOUND;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/documents")
public class DocumentController {

    private final PdfToDraftConverter pdfToDraftConverter;
    private final ConfirmToDocumentConverter confirmToDocumentConverter;

    /**
     * 1) PDF 업로드 → Draft 생성 (userId 기반 저장)
     */
    @PostMapping(path = "/parse", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ParseResponseDto parse(@RequestPart("file") MultipartFile file,
                                  @AuthenticationPrincipal UserPrincipal principal) throws Exception {

        Long userId = Optional.ofNullable(principal)
                .map(UserPrincipal::getUser)
                .map(u -> u.getId())
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND, "사용자 없음"));

        var draft = pdfToDraftConverter.convert(file, userId);

        return ParseResponseDto.builder()
                .parsedText(draft.getParsedText())
                .pageCount(draft.getPageCount())
                .filename(draft.getFilename())
                .sizeBytes(draft.getSizeBytes())
                .mimeType(draft.getMimeType())
                .userId(userId) // 굳이 주지 않아도 되지만, 프론트 참고용
                .build();
    }

    /**
     * 2) 사용자 수정 후 확정 저장
     */
    @PostMapping("/confirm")
    public DocumentResponseDto confirm(@Valid @RequestBody ConfirmRequestDto req,
                                       @AuthenticationPrincipal UserPrincipal principal) {

        Long userId = Optional.ofNullable(principal)
                .map(UserPrincipal::getUser)
                .map(u -> u.getId())
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND, "사용자 없음"));

        System.out.println("CONFIRM REQUEST = " + req);

        // confirmToDocumentConverter 내부에서 draftStore.get(userId) 기반으로 동작
        return confirmToDocumentConverter.convert(req, userId);
    }
}
