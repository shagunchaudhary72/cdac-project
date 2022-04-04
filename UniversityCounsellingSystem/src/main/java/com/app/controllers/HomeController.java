package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.College;
import com.app.pojos.Course;
import com.app.services.ICollegeService;
import com.app.services.ICourseService;

@RestController
@RequestMapping(value = "/home")
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {
	
	@Autowired
	private ICollegeService collegeService;
	
	@Autowired
	private ICourseService courseService;
	
	public HomeController() {
		System.out.println("in constructor of : " + getClass());
	}
	
	@GetMapping("/colleges")
	public ResponseEntity<?> fetchAllColleges(){
		return ResponseEntity.ok().body(collegeService.getAllCollege());
	}
	
	@GetMapping("/college/{collegeId}")
	public ResponseEntity<College> fetchCollegeDetails(@PathVariable int collegeId ){
		return ResponseEntity.ok().body(collegeService.getCollegeDetails(collegeId));
	}
	
	@GetMapping("/college_details/{name}")
	public ResponseEntity<College> fetchCollegeDetailsByName(@PathVariable String name ){
		return ResponseEntity.ok().body(collegeService.getCollegeDetailsByName(name));
	}
	
	@GetMapping("/courses")
	public ResponseEntity<?> fetchAllCourses(){
		return ResponseEntity.ok().body(courseService.listOfCourses());
	}
	
	
	@GetMapping("/course/{courseId}")
	public ResponseEntity<Course> fetchCourseDetails(@PathVariable int courseId ){
		return ResponseEntity.ok().body(courseService.getCourseDetails(courseId));
	}
	
	@GetMapping("/course_details/{courseName}")
	public ResponseEntity<Course> fetchCourseDetailsByName(@PathVariable String courseName ){
		return ResponseEntity.ok().body(courseService.getCourseDetailsByName(courseName));
	}
	

}
