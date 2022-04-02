package com.app.services;

import java.util.List;

import com.app.pojos.ShortlistedStudent;

public interface IShortlistedStudentService {
	
	//method to get all shortlisted students
	List<ShortlistedStudent> getAllShortlistedStudents();
	
	//method to get shortlisted students By college
	List<ShortlistedStudent> getAllShortlistedStudentsByCollege(int id);
	
	//method to get shortlisted students BY College and branch
	List<ShortlistedStudent> getAllShortlistedStudentsByCollegeCourse(int collegeId, int courseId);
}
