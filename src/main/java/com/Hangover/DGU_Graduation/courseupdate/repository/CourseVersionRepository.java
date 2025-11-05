package com.Hangover.DGU_Graduation.courseupdate.repository;

import com.Hangover.DGU_Graduation.courseupdate.entity.CourseVersion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseVersionRepository extends JpaRepository<CourseVersion,Long> {
    List<CourseVersion> findByChangeTypeIn(List<String> types);
}
