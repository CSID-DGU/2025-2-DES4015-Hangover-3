package com.Hangover.DGU_Graduation.document;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class DraftStore {

    @Data @AllArgsConstructor
    public static class Draft {
        private String sessionId;
        private byte[] pdfBytes;
        private String filename;
        private String mimeType;
        private long sizeBytes;
        private String sha256;
        private String parsedText;
        private int pageCount;
        private Instant createdAt;
    }

    private final Map<String, Draft> store = new ConcurrentHashMap<>();

    public Draft create(byte[] bytes, String filename, String mimeType, String parsedText, int pageCount) {
        String id = UUID.randomUUID().toString();
        String sha = DigestUtils.sha256Hex(bytes);
        Draft d = new Draft(id, bytes, filename, mimeType, bytes.length, sha, parsedText, pageCount, Instant.now());
        store.put(id, d);
        return d;
    }

    public Draft get(String sessionId) { return store.get(sessionId); }
    public void remove(String sessionId) { store.remove(sessionId); }
}
