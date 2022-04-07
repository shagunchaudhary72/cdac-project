package com.app.services;

import java.util.List;
import java.util.Set;

import javax.validation.Valid;

import com.app.dto.CollegeUserDTO;
import com.app.pojos.College;
import com.app.pojos.Course;
import com.app.pojos.User;

public interface ICollegeService {

	//method to delete college
	List<College> deleteCollege(int id);
	
	//method to get list of coleges
	List<College> getAllCollege();
	
	//method to fetch college Details
	College getCollegeDetails(int id);
	
	College regCollege(College collegeData);

	College updateCollegeDetails(College editedCollegeData);

	Set<Course> addCollegeCourse(int id, int courseid);
	
	Set<Course> getAllCoursesOfCollege(String name);

	Set<Course> deleteCourse(int id, int courseid);

	User regUserAsCollege(CollegeUserDTO collegeUserData);

	College getCollegeDetailsByName(String name);
	
}
