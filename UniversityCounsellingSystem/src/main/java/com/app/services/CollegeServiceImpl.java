package com.app.services;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
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
	UniversityRepository universityRepo;

	@Autowired
	CoureseRepository courseRepo;

	@Autowired
	UserRepository userRepo;

	@Override
	public String deleteCollege(int id) {
		// getting college object from datatbase
		College college = collegeRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("College Not Found , CollegeId : " + id));
		String collegeName = college.getName();

		// deleting college
		collegeRepo.deleteById(id);
		return "College Deleted-> CollegeName : " + collegeName + ", CollegeId : " + id;
	}

	@Override
	public List<College> getAllCollege() {
		return collegeRepo.findAll();
	}

	@Override
	public College getCollegeDetails(int id) {
		// getting college object from datatbase
		College college = collegeRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("College Not Found , CollegeId : " + id));
		return college;
	}

	@Override
	public College regCollege(College collegeData) {
		return collegeRepo.save(collegeData);
	}

	@Override
	public College updateCollegeDetails(College editedCollegeData) {
		return collegeRepo.save(editedCollegeData);
	}

	@Override
	public Set<Course> addCollegeCourse(int id, int courseid) {
		Course course = courseRepo.findById(courseid).orElseThrow(() -> new ResourceNotFoundException("Invalid Course Id ") );
		System.out.println(course);
		College collegeData = collegeRepo.findById(id).orElseThrow(() -> {
			throw new RuntimeException("Invalid Id");
		});
		Set<Course> courseSet = collegeData.getCourses();
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
		return collegeData.getCourses();
	}

	@Override
	public User regUserAsCollege(CollegeUserDTO collegeUserData) {
		University uni = universityRepo.findById(1).orElseThrow(() -> {
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
	public College authenticateCollege(userDTO userSigninData) {
		College college = collegeRepo.findByEmailAndPassword(userSigninData.getEmail(), userSigninData.getPassword());
		if (!(college == null)) {
			return college;
		} else {
			throw new RuntimeException("Invalid Email-Id or Password");
		}
	}

	//for adding new course( admin )
	@Override
	public Course addNewCourse(Course course) {
		return courseRepo.save(course);
	}


}
