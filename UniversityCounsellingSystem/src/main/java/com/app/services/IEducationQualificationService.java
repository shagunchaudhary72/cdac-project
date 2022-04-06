package com.app.services;

import java.util.List;

import com.app.pojos.EducationQualification;

public interface IEducationQualificationService {

	List<EducationQualification> getAllEducationByStudentId(int studentId);
}
