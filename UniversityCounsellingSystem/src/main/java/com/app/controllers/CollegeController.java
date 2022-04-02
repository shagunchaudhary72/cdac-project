package com.app.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.app.dto.userDTO;
import com.app.pojos.College;
import com.app.services.ICollegeService;

@RestController
@RequestMapping("/college")
public class CollegeController {

	@Autowired
	ICollegeService collegeService;

	@Autowired
	CollegeRepository collegeRepository;

	@PostMapping("/register") // Login Register form's register page
	public ResponseEntity<?> registerAsCollege(@RequestBody CollegeUserDTO collegeUserData) {
		return ResponseEntity.status(HttpStatus.CREATED).body(collegeService.regUserAsCollege(collegeUserData));
	}

	@PostMapping("/signin")
	// authencating college
	public ResponseEntity<?> collegeRegisteration(@RequestBody @Valid userDTO userSigninData) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(collegeService.authenticateCollege(userSigninData));
	}

	@GetMapping("/profile/{collegeid}") // Get college profile
	public ResponseEntity<?> showProfile(@PathVariable("collegeid") int id) {
		return ResponseEntity
				.ok(collegeRepository.findById(id).orElseThrow(() -> new RuntimeException("Invalid College Id")));
	}

	@PutMapping("/editProfile") // Edit profile
	public College editCollegeData(@RequestBody @Valid College editedCollegeData) {
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
}
