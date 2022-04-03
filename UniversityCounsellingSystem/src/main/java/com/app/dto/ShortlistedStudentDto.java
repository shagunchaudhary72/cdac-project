package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ShortlistedStudentDto {

	private String name;
	private double markInComp;
	private int rankInComp;
	private String collegeName;
	private String universityName;
}
