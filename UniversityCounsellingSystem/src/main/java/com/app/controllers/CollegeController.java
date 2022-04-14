package com.app.controllers;

import javax.validation.Valid;

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
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.CollegeRepository;
import com.app.dto.CollegeUserDTO;
import com.app.dto.NewCourse;
import com.app.pojos.College;
import com.app.services.ICollegeService;
import com.app.services.ICourseService;
import com.app.services.IShortlistedStudentService;

@RestController
@RequestMapping("/college")
@CrossOrigin(origins = "http://localhost:3000")
public class CollegeController {

	@Autowired
	ICollegeService collegeService;
	
	@Autowired
	ICourseService courseService;
	
	@Autowired
	IShortlistedStudentService shortlistedStudentService;
	
	@GetMapping
	public ResponseEntity<?> getAllColleges(){
		return ResponseEntity.ok().body(collegeService.getAllCollege());
	}

	@GetMapping("/profile/{collegeid}") // Get college profile
	public ResponseEntity<?> showProfile(@PathVariable("collegeid") int id) {
		return ResponseEntity.ok().body(collegeService.getCollegeDetails(id));
	}
	
	@GetMapping("/{collegeName}/courses")
	public ResponseEntity<?> getAllCoursesOfCllege(@PathVariable String collegeName){
		return ResponseEntity.ok().body(collegeService.getAllCoursesOfCollege(collegeName));
	}

	@PutMapping("/edit") // Edit profile
	public College editCollegeData(@RequestBody @Valid College editedCollegeData) {
		System.out.println(editedCollegeData);
		return collegeService.updateCollegeDetails(editedCollegeData);
	}

	@PostMapping("/{collegeid}/addCourse") // add course in current college based on college id
	public ResponseEntity<?> addCourse(@PathVariable("collegeid") int id, @RequestBody NewCourse addCourse) {
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(collegeService.addCollegeCourse(id, addCourse.getId()));
	}

	@DeleteMapping("/{collegeid}/deleteCourse/{courseid}") // delete course from current college but not from
															// courses_tbl
	public ResponseEntity<?> deleteCourse(@PathVariable("collegeid") int id,
			@PathVariable("courseid") int courseid) {
		return ResponseEntity.status(HttpStatus.OK).body(collegeService.deleteCourse(id, courseid));
	}
	

	@GetMapping("/{collegeId}/shortlisted_students")
	public ResponseEntity<?> fetchAllSelectedStudentsByCollege(@PathVariable int collegeId) {
		return ResponseEntity.ok().body(shortlistedStudentService.getAllShortlistedStudentsByCollege(collegeId));
	}

	@GetMapping("/{collegeId}/course/{courseId}/shortlisted_students")
	public ResponseEntity<?> fetchAllSelectedStudentsByCollegeCourse(@PathVariable int collegeId,
			@PathVariable int courseId) {
		return ResponseEntity.ok().body(shortlistedStudentService.getAllShortlistedStudentsByCollegeCourse(collegeId, courseId));
	}
	
	@GetMapping("/courseList")
	public ResponseEntity<?> getCourseList() {
		return ResponseEntity.ok().body(courseService.listOfCourses());
	} 
	
	
	
}
