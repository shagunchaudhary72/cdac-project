package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.custom_exceptions.AuthenticationException;
import com.app.dao.StudentRepository;
import com.app.dao.UniversityRepository;
import com.app.dao.UserRepository;
import com.app.dto.LoginResponse;
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
	private UniversityRepository universityRepo;

	@Override
	public LoginResponse login(String email, String password) {
		
		User user = userRepo.findByEmailAndPassword(email, password).orElseThrow(()->new AuthenticationException("Email-ID or Password is incorrect"));
		if( user.getRole().equals(Role.ADMIN)) {	
			University university = universityRepo.findByEmail( user.getEmail() ).get();
			return new LoginResponse(user.getName(), user.getEmail(), user.getRole());
		}
		else if( user.getRole().equals(Role.STUDENT)) {
			Student student = studentRepo.findByEmail(email);
			 return new LoginResponse(student.getId(),user.getEmail(),user.getName(),student.getAge(),user.getRole(),student.getAddress());
		}
		else {
			return null;
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
