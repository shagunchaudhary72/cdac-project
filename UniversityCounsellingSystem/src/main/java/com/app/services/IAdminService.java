package com.app.services;

import java.util.List;

import com.app.dto.ShortlistedStudentDto;
import com.app.dto.StudentRankDto;
import com.app.pojos.ShortlistedStudent;
import com.app.pojos.Student;

public interface IAdminService {

	List<ShortlistedStudentDto> declareResult();
	
	List<StudentRankDto> declareRanks();
}
