package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UpdateProfile {
	private String name;
	private String email;
	private String phoneNo;
	private int age;
	private String city;
	private String state;
	private String country;
	private String pincode;
	private double marksInComp;
}
