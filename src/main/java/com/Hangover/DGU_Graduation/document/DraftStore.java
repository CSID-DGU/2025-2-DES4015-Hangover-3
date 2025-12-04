package com.Hangover.DGU_Graduation.document;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class DraftStore {

    @Data
    @AllArgsConstructor
    public static class Draft {
        private Long userId;           // sessionId 대신 userId가 key
        private byte[] pdfBytes;
        private String filename;
        private String mimeType;
        private long sizeBytes;
        private String sha256;
        private String parsedText;
        private int pageCount;
        private Instant createdAt;
    }

    private final Map<Long, Draft> store = new ConcurrentHashMap<>();

    public Draft create(Long userId,
                        byte[] bytes,
                        String filename,
                        String mimeType,
                        String parsedText,
                        int pageCount) {

        Draft d = new Draft(
                userId,
                bytes,
                filename,
                mimeType,
                bytes.length,
                "sha256",
                parsedText,
                pageCount,
                Instant.now()
        );

        store.put(userId, d);
        return d;
    }

    public Draft get(Long userId) { return store.get(userId); }
    public void remove(Long userId) { store.remove(userId); }
}
