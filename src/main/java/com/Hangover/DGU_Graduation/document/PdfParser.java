package com.Hangover.DGU_Graduation.document;

import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Component;
import technology.tabula.ObjectExtractor;
import technology.tabula.Page;
import technology.tabula.Table;
import technology.tabula.extractors.BasicExtractionAlgorithm;
import technology.tabula.extractors.SpreadsheetExtractionAlgorithm;

import java.io.InputStream;
import java.util.Iterator; // 2. (추가) Iterator를 사용하기 위해 import 합니다.
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Component
public class PdfParser {

    public static class Result {
        public final String text;
        public final int pageCount;
        public Result(String text, int pageCount) { this.text = text; this.pageCount = pageCount; }
    }

    public Result parse(InputStream is) throws Exception {
        try (PDDocument doc = PDDocument.load(is)) {
            PDFTextStripper stripper = new PDFTextStripper();
            stripper.setSortByPosition(true);
            stripper.setShouldSeparateByBeads(true);
            stripper.setAddMoreFormatting(true);
            stripper.setSuppressDuplicateOverlappingText(false);
            stripper.setWordSeparator(" ");

            StringBuilder out = new StringBuilder(normalize(stripper.getText(doc)));

            try (ObjectExtractor oe = new ObjectExtractor(doc)) {
                SpreadsheetExtractionAlgorithm sea = new SpreadsheetExtractionAlgorithm();
                BasicExtractionAlgorithm bea = new BasicExtractionAlgorithm();

                int pageNo = 1;

                // 3. (수정) oe.extract()는 Iterator를 반환하므로,
                // for-each 문이 아닌 while 문으로 변경해야 합니다.
                Iterator<Page> pageIterator = oe.extract();
                while (pageIterator.hasNext()) {
                    Page page = pageIterator.next(); // Iterator에서 실제 Page 객체를 꺼냅니다.

                    // --- 여기부터는 동일한 로직 ---
                    List<Table> tables = sea.extract(page);
                    if (tables.isEmpty()) tables = bea.extract(page);

                    if (!tables.isEmpty()) {
                        out.append("\n\n=== TABLES (page ").append(pageNo).append(") ===\n");
                        for (Table t : tables) {
                            String tsv = t.getRows().stream()
                                    .map(row -> row.stream()
                                            .map(cell -> normalize(cell.getText()).replace("\n"," ").trim())
                                            .collect(Collectors.joining("\t")))
                                    .collect(Collectors.joining("\n"));
                            out.append(tsv).append("\n");
                        }
                    }
                    pageNo++; // 페이지 번호 증가
                }
            }
            return new Result(out.toString(), doc.getNumberOfPages());
        }
    }

    private static String normalize(String s) {
        if (s == null) return "";
        return s.replace("\r","\n")
                .replaceAll("\\u00A0"," ")
                .replaceAll("[\\t\\f\\v]+"," ")
                .replaceAll(" +\\n","\n")
                .replaceAll("\\n{3,}","\n\n")
                .trim();
    }
}