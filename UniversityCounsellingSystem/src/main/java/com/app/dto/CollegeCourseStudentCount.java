package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CollegeCourseStudentCount {
	
	public Long studentCount;
	public Long courseCount;
	public Long collegeCount;

}
