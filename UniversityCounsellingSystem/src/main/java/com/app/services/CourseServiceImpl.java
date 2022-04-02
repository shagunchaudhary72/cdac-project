package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CoureseRepository;
import com.app.pojos.Course;

@Service
@Transactional
public class CourseServiceImpl implements ICourseService {
	
	@Autowired
	private CoureseRepository courseRepo;

	@Override
	public List<Course> listOfCourses() {
		// TODO Auto-generated method stub
		return courseRepo.findAll();
	}
	
	//for adding new course( admin )
	@Override
	public Course addNewCourse(Course course) {
		return courseRepo.save(course);
	}
	
	

}
