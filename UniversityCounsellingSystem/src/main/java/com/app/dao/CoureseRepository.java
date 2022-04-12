package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Course;

public interface CoureseRepository extends JpaRepository<Course, Integer>{

	//method to get course by name
	Course findByCourseName(String courseName );
	
	@Query("select count(c) from Course c")
	Long findCountOfCourse();
	
}
