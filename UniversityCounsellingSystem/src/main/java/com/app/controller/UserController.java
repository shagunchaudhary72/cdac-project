package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.services.IUserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private IUserService userService;
	
	@GetMapping("/{email}/{password}")
	public String loginViaRole(@PathVariable String email,@PathVariable String password) {
		User user=userService.login(email, password);
		if(user!=null) {
		if(user.getRole()==Role.STUDENT)
			return "Login as student";
		else if (user.getRole()==Role.COLLEGE)
			return "Login as college";
		else
			return "Login as admin";
		}
			return "Login failed!!!";
	}
	
	


}
