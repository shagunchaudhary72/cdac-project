package com.app.dto;

import com.app.pojos.Address;
import com.app.pojos.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginResponse {
	private int studentId;
	private String email;
	private String name;
	private int age;
	private Role role;
	private Address address;
}
