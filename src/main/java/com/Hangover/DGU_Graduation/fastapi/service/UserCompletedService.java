package com.Hangover.DGU_Graduation.fastapi.service;

import com.Hangover.DGU_Graduation.fastapi.domain.UserCompleted;
import com.Hangover.DGU_Graduation.fastapi.dto.request.CompletedRowRequest;
import com.Hangover.DGU_Graduation.fastapi.repository.UserCompletedRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserCompletedService {

    private final UserCompletedRepository repo;

    public void saveUserCompleted(Long userId, List<CompletedRowRequest> rows) {

        // 기존 내역 삭제
        repo.deleteByUserId(userId);

        for (CompletedRowRequest r : rows) {
            UserCompleted entity = new UserCompleted();
            entity.setUserId(userId);
            entity.setCourseNo(r.getCourse_no());
            entity.setCredit(r.getCredits());
            entity.setArea(r.getArea());
            entity.setEnglishYn(r.getEnglish_yn());
            repo.save(entity);
        }
    }
}
