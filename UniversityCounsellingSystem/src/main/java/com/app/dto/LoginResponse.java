package com.app.dto;

import com.app.pojos.Role;
import com.app.pojos.University;

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
	
	private int collegeId;
	private String state;
	private String city;
	private String phoneNo;
	University university;

	public LoginResponse(int studentId, String email, String name, int age, Role role) {
		super();
		this.studentId = studentId;
		this.email = email;
		this.name = name;
		this.age = age;
		this.role = role;
	}
	
	public LoginResponse(int collegeid, String email, String name, String city, String state, University university,
			String phoneNo, Role role) {
		this.email = email;
		this.name = name;
		this.role = role;
		this.collegeId = collegeid;
		this.state = state;
		this.city = city;
		this.university = university;
		this.phoneNo = phoneNo;
	}
}
