package com.app.dto;

import com.app.pojos.Student;
import com.app.pojos.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class StudentRegistration {
	
	private User user;
	private Student student;
}
