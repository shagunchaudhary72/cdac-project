package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.custom_exceptions.AuthenticationException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CollegeRepository;
import com.app.dao.StudentRepository;
import com.app.dao.UniversityRepository;
import com.app.dao.UserRepository;
import com.app.dto.LoginResponse;
import com.app.pojos.College;
import com.app.pojos.Role;
import com.app.pojos.Student;
import com.app.pojos.University;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	CollegeRepository collegeRepo;

	@Autowired
	private UniversityRepository universityRepo;

	@Override
	public LoginResponse login(String email, String password) {
		
		User user = userRepo.findByEmailAndPassword(email, password).orElseThrow(()->new AuthenticationException("Email-ID or Password is incorrect"));
		if( user.getRole().equals(Role.ADMIN)) {	
			//University university = universityRepo.findByEmail( user.getEmail() ).get();
			return new LoginResponse(user.getName(), user.getEmail(), user.getRole());
		}
		else if( user.getRole().equals(Role.STUDENT)) {
			Student student = studentRepo.findByEmail(email);
			 return new LoginResponse(student.getId(),user.getEmail(),user.getName(),student.getAge(),user.getRole(),student.getAddress());
		}
		else {
			College college = collegeRepo.findByEmail(email);
			System.out.println("College: "+college);
			System.out.println("User: "+user);
			//System.out.println(universityRepo.findAll().size());
			//System.out.println("University: "+universityRepo.getById(1));
			//universityRepo.getById(1).getClass();
			System.out.println(universityRepo.findAll().size());
			int uniid = universityRepo.findById(1).get().getId();
			String uniemail = universityRepo.findById(1).get().getEmail();
			String uniname = universityRepo.findById(1).get().getUniversityName();
			return new LoginResponse(college.getId(),user.getEmail(),user.getName(),college.getCountry(), college.getCity(),college.getState(), uniid, uniemail, uniname, user.getPhoneNo(),user.getRole(), college.getCourses());
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


	@Override
	public User updatePassword(String email, String newPassword) {
		User user = userRepo.findByEmail(email).orElseThrow(()->new ResourceNotFoundException("User with email: "+email+" not found in our database"));
		user.setPassword(newPassword);
		return userRepo.save(user);
	}


	@Override
	public User getUserDetails(String email) {
		return userRepo.findByEmail(email).orElseThrow(()->new ResourceNotFoundException("User with email "+email+" not found"));
	}

}
