package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ShortlistedStudentDto {

	private int studentId;
	private String name;
	private double markInComp;
	private int rankInComp;
	private int collegeId;
	private String collegeName;
	private int courseId;
	private String courseName;
	private String universityName;
}
