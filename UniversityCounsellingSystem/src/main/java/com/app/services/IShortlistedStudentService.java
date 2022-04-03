package com.app.services;

import java.util.List;

import com.app.dto.ShortlistedStudentDto;
import com.app.pojos.ShortlistedStudent;

public interface IShortlistedStudentService {
	
	//method to get all shortlisted students
	List<ShortlistedStudent> getAllShortlistedStudents();
	
	//method to get shortlisted students By college
	List<ShortlistedStudentDto> getAllShortlistedStudentsByCollege(int id);
	
	//method to get shortlisted students BY College and branch
	List<ShortlistedStudentDto> getAllShortlistedStudentsByCollegeCourse(int collegeId, int courseId);
}
