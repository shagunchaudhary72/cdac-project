package com.app.services;

import java.util.List;

import com.app.pojos.College;

public interface ICollegeService {

	//method to delete college
	String deleteCollege(int id);
	
	//method to get list of coleges
	List<College> getAllCollege();
	
	//method to fetch college Details
	College getCollegeDetails(int id);
}
