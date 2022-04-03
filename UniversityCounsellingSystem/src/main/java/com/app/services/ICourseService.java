package com.app.services;

import java.util.List;

import com.app.pojos.Course;

public interface ICourseService {
	List<Course> listOfCourses();

	
	Course addNewCourse(Course course);
	
	//method to get course information
	Course getCourseDetails(int courseId);
}
