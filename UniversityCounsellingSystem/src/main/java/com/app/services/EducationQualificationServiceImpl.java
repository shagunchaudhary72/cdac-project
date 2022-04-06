package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.EducationRepository;
import com.app.pojos.EducationQualification;


@Service
@Transactional
public class EducationQualificationServiceImpl implements IEducationQualificationService {
	
	@Autowired
	private EducationRepository eduRepo;

	@Override
	public List<EducationQualification> getAllEducationByStudentId(int studentId) {
		return eduRepo.findAllEducationQualificationsByStudentId(studentId);
	}

}
