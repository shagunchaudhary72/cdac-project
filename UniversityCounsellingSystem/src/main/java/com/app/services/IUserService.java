package com.app.services;


import com.app.dto.LoginResponse;
import com.app.pojos.User;

public interface IUserService {
	
	LoginResponse login(String email,String password);
	
	User registerAsStudent(User user);

}
