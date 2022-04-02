package com.app.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CollegeUserDTO;
import com.app.dto.LoginRequest;
import com.app.dto.StudentRegistration;
import com.app.pojos.Student;
import com.app.pojos.User;
import com.app.services.ICollegeService;
import com.app.services.IStudentService;
import com.app.services.IUserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private IUserService userService;
	
	@Autowired
	private IStudentService studentService;
	
	@Autowired
	private ICollegeService collegeService;

	@PostMapping("/signin")
	public ResponseEntity<?> loginViaRole(@RequestBody LoginRequest request) {
		System.out.println(request.getEmail() + " " + request.getPassword());
		return ResponseEntity.ok(userService.login(request.getEmail(), request.getPassword()));
	}

	@PostMapping("/student/register")
	public ResponseEntity<?> registerAsStudent(@RequestBody @Valid StudentRegistration studentRegistration) {
		System.out.println("in add user " + studentRegistration);
		User user = null;
		Student student = null;
		try {
			user = userService.registerAsStudent(studentRegistration.getUser());
			student = studentService.addStudent(studentRegistration.getStudent());
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(user);
	}
	
	@PostMapping("/college/register") // Login Register form's register page
	public ResponseEntity<?> registerAsCollege(@RequestBody CollegeUserDTO collegeUserData) {
		return ResponseEntity.status(HttpStatus.CREATED).body(collegeService.regUserAsCollege(collegeUserData));
	}

}