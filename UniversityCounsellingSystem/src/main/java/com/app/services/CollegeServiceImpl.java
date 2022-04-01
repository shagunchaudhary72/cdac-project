package com.app.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CollegeRepository;
import com.app.pojos.College;

@Service
@Transactional
public class CollegeServiceImpl implements ICollegeService {

	@Autowired
	CollegeRepository collegeRepo;

	@Override
	public String deleteCollege(int id) {
		//getting college object from datatbase
		College college = collegeRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("College Not Found , CollegeId : " + id));
		String collegeName = college.getName();
		
		//deleting college
		collegeRepo.deleteById(id);
		return "College Deleted-> CollegeName : " + collegeName + ", CollegeId : " + id;
	}

	@Override
	public List<College> getAllCollege() {
		return collegeRepo.findAll();
	}

	@Override
	public College getCollegeDetails(int id) {
		//getting college object from datatbase
		College college = collegeRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("College Not Found , CollegeId : " + id));
		return college;
	}

}
