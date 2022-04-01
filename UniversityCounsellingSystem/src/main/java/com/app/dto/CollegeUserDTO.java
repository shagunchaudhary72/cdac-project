package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CollegeUserDTO {
	private String name;
	private String email;
	private String password;
	private int age;
	private String phone_no;
	private String city;
	private String state;
	private int university;
}
