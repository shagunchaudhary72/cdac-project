package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Course;
import com.app.services.ICollegeService;
import com.app.services.IShortlistedStudentService;

@RestController
@RequestMapping(value = "/admin")
public class AdminController {

	@Autowired
	private ICollegeService collegeService;

	@Autowired
	private IShortlistedStudentService shortlistStudentService;

	public AdminController() {
		System.out.println("in constructor of : " + getClass());
	}

	@GetMapping("/colleges")
	public ResponseEntity<?> fetchAllCollege() {
		// getting data from service and returning to caller

		return ResponseEntity.ok().body(collegeService.getAllCollege());

	}

	@GetMapping("/college/{id}")
	public ResponseEntity<?> fetchCollegeDetails(@PathVariable int id) {

		// getting college object by invoking service interface method
		return ResponseEntity.ok().body(collegeService.getCollegeDetails(id));

	}

	@DeleteMapping("/college/{id}")
	public ResponseEntity<?> deleteCollege(@PathVariable int id) {

		// deleting college by invoking service interface method
		return ResponseEntity.ok().body(collegeService.deleteCollege(id));

	}

	@GetMapping("/students")
	public ResponseEntity<?> fetchAllStudents() {
		return null;
	}

	@GetMapping("/student/{id}")
	public ResponseEntity<?> fetchStudentDetails(@PathVariable int id) {
		return null;
	}

	@DeleteMapping("/student/{id}")
	public ResponseEntity<?> deleteStudent(@PathVariable int id) {
		return null;
	}

	@GetMapping("/shortlisted_students")
	public ResponseEntity<?> fetchAllSelectedStudents() {

		return ResponseEntity.ok().body(shortlistStudentService.getAllShortlistedStudents());

	}

	@GetMapping("/shortlisted_students/college/{id}")
	public ResponseEntity<?> fetchAllSelectedStudentsByCollege(@PathVariable int id) {

		return ResponseEntity.ok().body(shortlistStudentService.getAllShortlistedStudentsByCollege(id));

	}

	@GetMapping("/shortlisted_students/college/{collegeId}/course/{courseId}")
	public ResponseEntity<?> fetchAllSelectedStudentsByCollegeBranch(@PathVariable int collegeId,
			@PathVariable int courseId) {
//		try {
//			return ResponseEntity.ok().body(shortlistStudentService.getAllShortlistedStudentsByCollege(id));
//		}
//		catch(RuntimeException ex) {
//			return ResponseEntity.internalServerError().body(ex.getMessage());
//		}
		return null;
	}

	@GetMapping("/declare_result")
	public ResponseEntity<?> declareResult() {
		return null;
	}
	
	@PostMapping("/course")
	public ResponseEntity<?> addNewCourse(@RequestBody Course course){
		return ResponseEntity.status(HttpStatus.CREATED).body(collegeService.addNewCourse(course));
	}
}
