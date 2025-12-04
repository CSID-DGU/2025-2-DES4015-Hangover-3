package com.Hangover.DGU_Graduation.document.converter;

import com.Hangover.DGU_Graduation.document.DraftStore;
import com.Hangover.DGU_Graduation.document.PdfParser;
import com.Hangover.DGU_Graduation.fastapi.domain.UserInfo;
import com.Hangover.DGU_Graduation.fastapi.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
@RequiredArgsConstructor
public class PdfToDraftConverter {

    private final PdfParser pdfParser;
    private final DraftStore draftStore;
    private final UserInfoRepository userInfoRepository;

    public DraftStore.Draft convert(MultipartFile file, Long userId) throws Exception {

        // 1) PDF 내부 텍스트 파싱
        var parsed = pdfParser.parse(file.getInputStream());
        String extractedText = parsed.text;

        // -------------------------------------------------------------
        // ⭐ TODO — 여기서 학번, 전공, 학년, 토익 등을 정규식으로 추출할 수 있음
        // -------------------------------------------------------------
        String studentId = "00000000";   // 예시 placeholder
        String program = "전공미상";
        int catalogYear = 2021;
        int toeic = 0;

        // -------------------------------------------------------------
        // ⭐ 2) UserInfo 자동 저장 또는 업데이트
        // -------------------------------------------------------------
        userInfoRepository.findByUserId(userId)
                .ifPresentOrElse(
                        info -> {
                            info.setStudentId(studentId);
                            info.setProgram(program);
                            info.setCatalogYear(catalogYear);
                            info.setToeic(toeic);
                            userInfoRepository.save(info);
                        },
                        () -> userInfoRepository.save(
                                UserInfo.builder()
                                        .userId(userId)
                                        .studentId(studentId)
                                        .program(program)
                                        .catalogYear(catalogYear)
                                        .toeic(toeic)
                                        .build()
                        )
                );

        // -------------------------------------------------------------
        // ⭐ 3) DraftStore 저장 (sessionId 제거 → userId 키 기반)
        // -------------------------------------------------------------
        return draftStore.create(
                userId,
                file.getBytes(),
                file.getOriginalFilename(),
                file.getContentType(),
                extractedText,
                parsed.pageCount
        );
    }
}
