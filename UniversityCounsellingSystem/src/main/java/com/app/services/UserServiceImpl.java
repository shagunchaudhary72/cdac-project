package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	@Autowired
	private UserRepository userRepo;

	@Override
	public User login(String email, String password) {
		// TODO Auto-generated method stub
		return userRepo.findEmailIdAndPassword(email, password);
	}

	@Override
	public User registerAsStudent(User user) {
		// TODO Auto-generated method stub
		return userRepo.save(user);
	}

}
