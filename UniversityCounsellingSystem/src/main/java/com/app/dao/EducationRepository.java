package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.EducationQualification;

public interface EducationRepository extends JpaRepository<EducationQualification, Integer> {
	List<EducationQualification> findAllEducationQualificationsByStudentId(int studentId);
}
