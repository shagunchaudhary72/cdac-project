package com.app.service;

import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CollegeRepository;
import com.app.dao.CoureseRepository;
import com.app.dao.UniversityRepository;
import com.app.dao.UserRepository;
import com.app.dto.CollegeUserDTO;
import com.app.dto.userDTO;
import com.app.pojos.College;
import com.app.pojos.Course;
import com.app.pojos.Role;
import com.app.pojos.University;
import com.app.pojos.User;

@Service
@Transactional
public class CollegeServiceImpl implements ICollegeService {

	@Autowired
	CollegeRepository collegeRepo;

	@Autowired
	CoureseRepository courseRepo;

	@Autowired
	UserRepository userRepo;

	@Autowired
	UniversityRepository universityRepo;

	@Override
	public College regCollege(College collegeData) {
		return collegeRepo.save(collegeData);
	}

	@Override
	public College updateCollegeDetails(College editedCollegeData) {
		return collegeRepo.save(editedCollegeData);
	}

	@Override
	public Set<Course> addCollegeCourse(int id, String addCourse) {
		Course course = new Course(addCourse);
		System.out.println(course);
		College collegeData = collegeRepo.findById(id).orElseThrow(() -> {
			throw new RuntimeException("Invalid Id");
		});
		Set<Course> courseSet = collegeData.getCourses();
		courseRepo.save(course);
		collegeData.getCourses().add(course);
		collegeData.setCourses(courseSet);
		collegeRepo.save(collegeData);
		return courseSet;
	}

	@Override
	public Set<Course> deleteCourse(int id, int courseid) {
		College collegeData = collegeRepo.findById(id).orElseThrow(() -> {
			throw new RuntimeException("Invalid Id");
		});
		Course course = courseRepo.findById(courseid).orElseThrow(() -> {
			throw new RuntimeException("Invalid CourseId");
		});
		collegeData.getCourses().remove(course);
		return collegeRepo.save(collegeData).getCourses();
	}

	@Override
	public User regUserAsCollege(CollegeUserDTO collegeUserData) {
		University uni = universityRepo.findById(collegeUserData.getUniversity()).orElseThrow(() -> {
			throw new RuntimeException("Invalid UniversityId");
		});
		User userData = new User(collegeUserData.getName(), collegeUserData.getEmail(), collegeUserData.getPassword(),
				Role.COLLEGE, collegeUserData.getPhone_no());
		College collegeData = new College(collegeUserData.getName(), collegeUserData.getEmail(),
				collegeUserData.getCity(), collegeUserData.getState(), uni);
		collegeRepo.save(collegeData);
		return userRepo.save(userData);
	}

	@Override
	public College getCollegeRegisterationForm(userDTO userSigninData) {
		return collegeRepo.findByEmail(userSigninData.getEmail());
	}

}
