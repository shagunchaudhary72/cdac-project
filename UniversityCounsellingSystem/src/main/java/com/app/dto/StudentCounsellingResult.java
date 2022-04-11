package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class StudentCounsellingResult {
	private int rank;
	private String collegeAllotedWithAddress;
	private String courseAlloted;

}
