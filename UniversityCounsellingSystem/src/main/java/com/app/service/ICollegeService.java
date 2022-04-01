package com.app.service;

import java.util.Set;

import javax.validation.Valid;

import com.app.dto.CollegeUserDTO;
import com.app.dto.userDTO;
import com.app.pojos.College;
import com.app.pojos.Course;
import com.app.pojos.User;

public interface ICollegeService {
	College regCollege(College collegeData);

	College updateCollegeDetails(College editedCollegeData);

	Set<Course> addCollegeCourse(int id, String addCourse);

	Set<Course> deleteCourse(int id, int courseid);

	User regUserAsCollege(CollegeUserDTO collegeUserData);

	College getCollegeRegisterationForm(@Valid userDTO userSigninData);
}
