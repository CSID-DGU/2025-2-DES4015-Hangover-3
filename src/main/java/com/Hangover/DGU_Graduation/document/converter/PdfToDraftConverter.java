package com.Hangover.DGU_Graduation.document.converter;

import com.Hangover.DGU_Graduation.document.DraftStore;
import com.Hangover.DGU_Graduation.document.PdfParser;
import com.Hangover.DGU_Graduation.document.DraftStore;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
@RequiredArgsConstructor
public class PdfToDraftConverter {

    private final PdfParser pdfParser;
    private final DraftStore draftStore;

    public DraftStore.Draft convert(MultipartFile file, Long userId) throws Exception {
        var parsed = pdfParser.parse(file.getInputStream());
        return draftStore.create(
                file.getBytes(),
                file.getOriginalFilename(),
                file.getContentType(),
                parsed.text,
                parsed.pageCount
        );
    }
}
