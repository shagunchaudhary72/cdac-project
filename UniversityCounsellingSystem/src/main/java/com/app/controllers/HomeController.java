package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.services.ICollegeService;
import com.app.services.ICourseService;

@RestController
@RequestMapping(value = "/home")
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
	
	@GetMapping("/courses")
	public ResponseEntity<?> fetchAllCourses(){
		return ResponseEntity.ok().body(courseService.listOfCourses());
	}
	
	

}
