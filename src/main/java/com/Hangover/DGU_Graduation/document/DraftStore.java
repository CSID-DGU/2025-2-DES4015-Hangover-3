package com.Hangover.DGU_Graduation.document;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class DraftStore {

    @Data
    @AllArgsConstructor
    public static class Draft {
        private Long userId;            // ★ sessionId 대신 userId 저장
        private byte[] pdfBytes;
        private String filename;
        private String mimeType;
        private long sizeBytes;
        private String sha256;
        private String parsedText;
        private int pageCount;
        private Instant createdAt;
    }

    // ★ key = userId
    private final Map<Long, Draft> store = new ConcurrentHashMap<>();

    /**
     * Draft 생성 및 저장 (key = userId)
     */
    public Draft create(Long userId, byte[] bytes, String filename, String mimeType,
                        String parsedText, int pageCount) {

        String sha = DigestUtils.sha256Hex(bytes);

        Draft d = new Draft(
                userId,
                bytes,
                filename,
                mimeType,
                bytes.length,
                sha,
                parsedText,
                pageCount,
                Instant.now()
        );

        store.put(userId, d);  // ★ sessionId 대신 userId 로 저장
        return d;
    }

    /**
     * Draft 조회
     */
    public Draft get(Long userId) {
        return store.get(userId);
    }

    /**
     * Draft 삭제
     */
    public void remove(Long userId) {
        store.remove(userId);
    }
}
