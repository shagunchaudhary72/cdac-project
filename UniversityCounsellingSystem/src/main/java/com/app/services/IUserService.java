package com.app.services;

import com.app.pojos.User;

public interface IUserService {
	User login(String email, String password);

	User registerAsStudent(User user);

}
