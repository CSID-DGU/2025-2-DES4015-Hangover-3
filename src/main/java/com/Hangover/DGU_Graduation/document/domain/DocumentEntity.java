package com.Hangover.DGU_Graduation.document.domain;

import com.Hangover.DGU_Graduation.auth.entity.User;
import com.Hangover.DGU_Graduation.common.domain.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity @Table(name = "documents")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class DocumentEntity extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id",nullable=false)
    private User user;

    // 메타
    private Short curriculumYear;                    // 적용연도
    @Column(length = 50)  private String category;   // "졸업요건" 등
    @Column(length = 255) private String title;      // 사용자 입력 제목

    // 원본 파일 정보
    @Column(length = 255) private String originalFilename;
    @Column(length = 100) private String mimeType;
    private Long sizeBytes;
    @Column(length = 64)  private String sha256;

    // 원본 PDF (DB에 넣는 방식; 스토리지 쓰면 path/url로 교체)
    @Lob @Basic(fetch = FetchType.LAZY)
    @Column(columnDefinition = "LONGBLOB")
    private byte[] data;

    // 최종 저장 텍스트(사용자 수정 반영)
    @Lob
    @Column(columnDefinition = "MEDIUMTEXT")
    private String finalText;

}
