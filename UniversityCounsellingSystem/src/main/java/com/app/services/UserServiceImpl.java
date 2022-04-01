package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.AuthenticationException;
import com.app.dao.UserRepository;
import com.app.dto.LoginResponse;
import com.app.pojos.User;


@Service
@Transactional
public class UserServiceImpl implements IUserService {
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public LoginResponse login(String email, String password) {
		User user = userRepo.findByEmailAndPassword(email, password).orElseThrow(()->new AuthenticationException("Email-ID or Password is incorrect"));
		return new LoginResponse(user.getId(),user.getEmail(), user.getRole());
	}

	@Override
	public User registerAsStudent(User user) {
		return userRepo.save(user);
	}

}
