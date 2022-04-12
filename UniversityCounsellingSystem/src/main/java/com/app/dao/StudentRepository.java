package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Student;


public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	//method to get studenst according to marks in decreasing order
	List<Student> findAllByOrderByMarksInCompDesc();
	
	Student findByEmail(String email);
	
	@Query("select count(s) from Student s")
	Long findCountOfStudent();

}
