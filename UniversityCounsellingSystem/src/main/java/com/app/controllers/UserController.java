package com.app.controllers;

import javax.validation.Valid;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ChangePasswordDTO;
import com.app.dto.CollegeUserDTO;
import com.app.dto.ForgotPassword;
import com.app.dto.LoginRequest;
import com.app.dto.StudentRegistration;
import com.app.pojos.Student;
import com.app.pojos.User;
import com.app.services.ICollegeService;
import com.app.services.IStudentService;
import com.app.services.IUserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private IUserService userService;

	@Autowired
	private IStudentService studentService;

	@Autowired
	private ICollegeService collegeService;
	
//	@Autowired
//	private BCrypt encoder;

	@PostMapping("/signin")
	public ResponseEntity<?> loginViaRole(@RequestBody LoginRequest request) {
		System.out.println(request.getEmail().toLowerCase() + " " + request.getPassword());
		return ResponseEntity.ok(userService.login(request.getEmail().toLowerCase(), request.getPassword()));
	}

	@PostMapping("/student/register")
	public ResponseEntity<?> registerAsStudent(@RequestBody @Valid StudentRegistration studentRegistration) {
		System.out.println("in add user " + studentRegistration);
		User user = null;
		Student student = null;
		try {
			user = userService.checkUserDetails(studentRegistration.getUser().getEmail().toLowerCase());
			if (user == null) {
				User userDetails = new User(studentRegistration.getUser().getName().toUpperCase(),studentRegistration.getUser().getEmail().toLowerCase(),BCrypt.hashpw(studentRegistration.getUser().getPassword(),BCrypt.gensalt()),studentRegistration.getUser().getRole(),studentRegistration.getUser().getPhoneNo());
				user = userService.registerAsStudent(userDetails);
				Student studentDetails = new Student(studentRegistration.getStudent().getName().toUpperCase(),studentRegistration.getStudent().getEmail().toLowerCase(),studentRegistration.getStudent().getAge());
				student = studentService.addStudent(studentDetails);
			}
			else {
				throw new RuntimeException("Email already registered");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(user);
	}

	@PostMapping("/college/register") // Login Register form's register page
	public ResponseEntity<?> registerAsCollege(@RequestBody @Valid CollegeUserDTO collegeUserData) {
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(collegeService.regUserAsCollege(collegeUserData));
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}

	@PutMapping("/updatePassword")
	public ResponseEntity<?> updatePassword(@RequestBody ForgotPassword userData) {
		return ResponseEntity.ok().body(userService.updatePassword(userData.getEmail(), userData.getNewPassword()));
	}

	@GetMapping("/details/{email}")
	public ResponseEntity<?> getUserDetails(@PathVariable String email) {
		return ResponseEntity.ok().body(userService.getUserDetails(email));
	}
	
	@PutMapping("/changePassword")
	public ResponseEntity<?> changePassword(@RequestBody ChangePasswordDTO passwordObj){
		return ResponseEntity.ok().body(userService.changePassword(passwordObj.getEmail(), passwordObj.getOldPassword(), passwordObj.getNewPassword()));
	}

}