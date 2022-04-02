package com.app.services;


import java.util.List;

import com.app.pojos.Student;

public interface IStudentService {
	
	Student addStudent(Student student);
	
	Student updateStudent(Student student);

	Student getStudentDetails(int id);
	
	List<Student> getAllStudents();

}
