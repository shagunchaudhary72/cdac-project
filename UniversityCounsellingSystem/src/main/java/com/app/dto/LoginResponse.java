package com.app.dto;

import com.app.pojos.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginResponse {
	private int id;
	private String email;
	private Role role;
	private String password;
}
