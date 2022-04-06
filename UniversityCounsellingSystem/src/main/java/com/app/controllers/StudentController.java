package com.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.EducationQualification;
import com.app.pojos.Preference;
import com.app.pojos.Student;
import com.app.services.IEducationQualificationService;
import com.app.services.IPreferenceService;
import com.app.services.IStudentService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
	
	@Autowired
	private IStudentService studentService;
	
	@Autowired
	private IPreferenceService preferenceService;
	
	@Autowired
	private IEducationQualificationService eduService;
	
	@GetMapping("/student/profile/{studentId}") // Get college profile
	public ResponseEntity<?> showProfile(@PathVariable int studentId) {
		return ResponseEntity.ok().body(studentService.getStudentDetails(studentId));
	}

	@GetMapping("/students")
	public ResponseEntity<?> getAllStudents(){
		List<Student> list = studentService.getAllStudents();
		if(list.size()<=0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.of(Optional.of(list));
	}
	
	@GetMapping("/student/educations/{id}")
	public ResponseEntity<?> getEducationDetailsByStudentId(@PathVariable int id){
		return ResponseEntity.ok(eduService.getAllEducationByStudentId(id));
	}
	
	/*
	 * @PostMapping public ResponseEntity<?> addStudent(@RequestBody Student
	 * transientStudent) { Student student = null; try {
	 * System.out.println(transientStudent); student =
	 * studentService.addStudent(transientStudent); return
	 * ResponseEntity.status(HttpStatus.CREATED).body(student); } catch (Exception
	 * e) { e.printStackTrace(); return
	 * ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); }
	 * 
	 * }
	 */
	
	@PutMapping("/student/edit")
	public ResponseEntity<?> updateStudentDetails(@RequestBody Student detachedStudent) {
		System.out.println(detachedStudent);
		try {
			return ResponseEntity.ok().body(studentService.updateStudent(detachedStudent));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@PutMapping("/student/education/{id}")
	public ResponseEntity<?> addQualification(@PathVariable int id,@RequestBody EducationQualification educationQualification) {
			Student student = studentService.getStudentDetails(id);
			student.addEducation(educationQualification);
			return ResponseEntity.status(HttpStatus.CREATED).body(studentService.updateStudent(student));
	}
	
	@PostMapping("/students/{studentId}/preference")
	public ResponseEntity<?> addPreference(@PathVariable int studentId,@RequestBody Preference preference){
		return ResponseEntity.ok().body(preferenceService.addPreference(preference, studentId));
	}
	
	@DeleteMapping("/student/{studentId}/preference/{preferenceId}")
	public ResponseEntity<?> deletePreference(@PathVariable int studentId, @PathVariable int preferenceId){
		return ResponseEntity.ok().body(preferenceService.deletePreference(studentId, preferenceId));
	}

}
