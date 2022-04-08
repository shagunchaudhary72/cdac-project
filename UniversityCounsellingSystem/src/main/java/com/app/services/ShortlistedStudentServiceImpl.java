package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ShortlistedStudentRepository;
import com.app.dto.ShortlistedStudentDto;
import com.app.pojos.ShortlistedStudent;

@Service
@Transactional
public class ShortlistedStudentServiceImpl implements IShortlistedStudentService {

	@Autowired
	private ShortlistedStudentRepository shortlistStudentRepo;
	
	@Override
	public List<ShortlistedStudentDto> getAllShortlistedStudents() {
		//shortlisted students
		return shortlistStudentRepo.findShortlistedStudents();
	}


	@Override
	public List<ShortlistedStudentDto> getAllShortlistedStudentsByCollege(int id) {
		return shortlistStudentRepo.findShortlistedStudentsByCollegeId(id);
	}


	@Override
	public List<ShortlistedStudentDto> getAllShortlistedStudentsByCollegeCourse(int collegeId, int courseId) {
		return shortlistStudentRepo.findShortlistedStudentsByCollegeIdCourseId(collegeId, courseId);
	}

}
