package com.app.services;

import java.util.List;

import com.app.dto.ShortlistedStudentDto;
import com.app.dto.StudentRankDto;
import com.app.dto.UpdationAndResultDates;
import com.app.pojos.ShortlistedStudent;
import com.app.pojos.Student;
import com.app.pojos.University;

public interface IAdminService {

	List<ShortlistedStudentDto> declareResult();
	
	List<StudentRankDto> declareRanks();
	
	University updateDates(University university);
	
	University getUniversityByEmail(String email);
	
	UpdationAndResultDates getAcademicDates(int id);
}
