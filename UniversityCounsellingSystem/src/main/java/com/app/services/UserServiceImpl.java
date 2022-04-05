package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.custom_exceptions.AuthenticationException;
import com.app.dao.CollegeRepository;
import com.app.dao.StudentRepository;
import com.app.dao.UniversityRepository;
import com.app.dao.UserRepository;
import com.app.dto.LoginResponse;
import com.app.pojos.College;
import com.app.pojos.Student;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	UniversityRepository universityRepo;
	
	@Autowired
	CollegeRepository collegeRepo;

	@Override
	public LoginResponse login(String email, String password) {
		
		User user = userRepo.findByEmailAndPassword(email, password).orElseThrow(()->new AuthenticationException("Email-ID or Password is incorrect"));
		if(user.getRole().equals("STUDENT")) {
			Student student = studentRepo.findByEmail(email);
		 return new LoginResponse(student.getId(),user.getEmail(),user.getName(),student.getAge(),user.getRole());
		}
		else {
			College college = collegeRepo.findByEmail(email);
			return new LoginResponse(college.getId(),user.getEmail(),user.getName(),college.getCity(),college.getState(),universityRepo.getById(1),user.getPhoneNo(),user.getRole());
		}
		/*
		 * User user = userRepo.authenticateUser(email, password); if(!(user == null)) {
		 * return new LoginResponse(user.getId(),user.getEmail(), user.getRole(),
		 * user.getPassword()); } else { throw new
		 * AuthenticationException("Invalid Email-Id or Password"); }
		 */
		
	}

	@Override
	public User registerAsStudent(User user) {
		return userRepo.save(user);
	}

}
