package com.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.EducationQualification;
import com.app.pojos.Student;
import com.app.services.IStudentService;

@RestController
@RequestMapping("/api/students")
public class StudentController {
	
	@Autowired
	private IStudentService studentService;
	
	@GetMapping
	public ResponseEntity<?> getAllStudents(){
		List<Student> list = studentService.getAllStudents();
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	@PostMapping
	public ResponseEntity<?> addStudent(@RequestBody Student transientStudent) {
		Student student = null;
		try {
			System.out.println(transientStudent);
			student = studentService.addStudent(transientStudent);
			return ResponseEntity.status(HttpStatus.CREATED).body(student);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getStudentDetails(@PathVariable int id) {
		return ResponseEntity.ok(studentService.getStudentDetails(id));
	}
	
	@PutMapping
	public ResponseEntity<?> updateStudentDetails(@RequestBody Student detachedStudent) {
		System.out.println(detachedStudent);
		try {
			return ResponseEntity.ok().body(studentService.updateStudent(detachedStudent));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@PutMapping("/education/{id}")
	public ResponseEntity<?> addQualification(@PathVariable int id,@RequestBody EducationQualification educationQualification) {
			Student student = studentService.getStudentDetails(id);
			student.addEducation(educationQualification);
			return ResponseEntity.ok().body(studentService.updateStudent(student));
	}

}
