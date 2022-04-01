package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ShortlistedStudentRepository;
import com.app.pojos.ShortlistedStudent;

@Service
@Transactional
public class ShortlistedStudentServiceImpl implements IShortlistedStudentService {

	@Autowired
	private ShortlistedStudentRepository shortlistStudentRepo;
	
	@Override
	public List<ShortlistedStudent> getAllShortlistedStudents() {
		//shortlisted students
		return shortlistStudentRepo.findAll();
	}

	@Override
	public List<ShortlistedStudent> getAllShortlistedStudentsByCollege(int id) {
		return shortlistStudentRepo.findShortlistedStudentsByCollegeId(id);
	}

	@Override
	public List<ShortlistedStudent> getAllShortlistedStudentsByCollegeCourse(int collegeId, int courseId) {
		// TODO Auto-generated method stub
		return null;
	}

}
