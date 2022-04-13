package com.app.dto;

import java.util.Set;

import com.app.pojos.Address;
import com.app.pojos.Course;
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
	private String country;
	private String state;
	private String city;
	private String phoneNo;
	University university;
	private Set<Course> courses;

	public LoginResponse(int studentId, String email, String name, int age, Role role, Address address) {
		super();
		this.studentId = studentId;
		this.email = email;
		this.name = name;
		this.age = age;
		this.role = role;
		this.address = address;
	}
	
	public LoginResponse(int collegeid, String email, String name, String country, String city, String state, University university,
			String phoneNo, Role role, Set<Course> courses) {
		this.email = email;
		this.name = name;
		this.role = role;
		this.collegeId = collegeid;
		this.country = country;
		this.state = state;
		this.city = city;
		this.university = university;
		this.phoneNo = phoneNo;
		this.courses = courses;
	}
	int uniid;
	String uniname;
	String uniemail;
	public LoginResponse(int collegeid, String email, String name, String country, String city, String state, int uniid,String uniemail,String uniname,
			String phoneNo, Role role, Set<Course> courses) {
		this.email = email;
		this.name = name;
		this.role = role;
		this.collegeId = collegeid;
		this.country = country;
		this.state = state;
		this.city = city;
		//this.university = university;
		this.uniid = uniid;
		this.uniname = uniname;
		this.uniemail = uniemail;
		this.phoneNo = phoneNo;
		this.courses = courses;
	}
	
	
	private Address address;

	public LoginResponse(String name, String email, Role role) {
		this.name = name;
		this.email = email;
		this.role = role;
	}
}
