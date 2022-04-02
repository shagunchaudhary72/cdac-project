package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Course;

public interface CoureseRepository extends JpaRepository<Course, Integer>{

	//method to get course by name
	Course findByCourseName(String courseName );
}
