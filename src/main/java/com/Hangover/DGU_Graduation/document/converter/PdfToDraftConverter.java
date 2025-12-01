package com.Hangover.DGU_Graduation.document.converter;

import com.Hangover.DGU_Graduation.document.DraftStore;
import com.Hangover.DGU_Graduation.document.PdfParser;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
@RequiredArgsConstructor
public class PdfToDraftConverter {

    private final PdfParser pdfParser;
    private final DraftStore draftStore;

    /**
     * PDF → Draft 변환
     * sessionId 제거 → userId 기반 저장
     */
    public DraftStore.Draft convert(MultipartFile file, Long userId) throws Exception {

        // 1) PDF 텍스트 파싱
        var parsed = pdfParser.parse(file.getInputStream());

        // 2) DraftStore 에 userId 기반으로 Draft 저장
        return draftStore.create(
                userId,                        // ⭐ 반드시 전달
                file.getBytes(),
                file.getOriginalFilename(),
                file.getContentType(),
                parsed.text,
                parsed.pageCount
        );
    }
}
