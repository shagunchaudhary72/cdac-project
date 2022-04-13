package com.app.services;

import java.util.Iterator;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CollegeRepository;
import com.app.dao.CoureseRepository;
import com.app.dao.PreferenceRepository;
import com.app.dao.ShortlistedStudentRepository;
import com.app.pojos.College;
import com.app.pojos.Course;
import com.app.pojos.Preference;
import com.app.pojos.ShortlistedStudent;

@Service
@Transactional
public class CourseServiceImpl implements ICourseService {
	
	@Autowired
	private CoureseRepository courseRepo;
	
	@Autowired
	private CollegeRepository clgRepo;
	
	@Autowired
	private ShortlistedStudentRepository ssRepo;
	
	@Autowired
	private PreferenceRepository preferenceRepo;

	@Override
	public List<Course> listOfCourses() {
		// TODO Auto-generated method stub
		return courseRepo.findAll();
	}
	
	//for adding new course( admin )
	@Override
	public Course addNewCourse(Course course) {
		return courseRepo.save(course);
	}

	@Override
	public Course getCourseDetails(int courseId) {
		
		return courseRepo.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("Course Not Found"));
	}

	@Override
	public Course getCourseDetailsByName(String courseName) {
		Course course = courseRepo.findByCourseName(courseName);
		if( course == null )
			throw new ResourceNotFoundException("Course Not Found");
		return course;
	}

	@Override
	public String deleteCourseById(int courseId) {
//		----------------------------------------------------------- Delete records for shortlisted students 
		ShortlistedStudent ss = ssRepo.findByCourseId(courseId); 
		if(ss!=null)
			ssRepo.delete(ss);
//		----------------------------------------------------------- Delete Courses from Colleges
		List<College> clgList = clgRepo.findAll();
		Iterator<College> itr = clgList.iterator();
		while(itr.hasNext()) {
			College c = itr.next();
			System.out.println(c);
			Iterator<Course> courses = c.getCourses().iterator();
			while(courses.hasNext()) {
				Course course = courses.next();
				if(course.getCourseName().equals(courseRepo.findById(courseId).get().getCourseName())) {
					System.out.println(course);
					courses.remove();	
				}
			}
			clgRepo.save(c);
		}
//		------------------------------------------------------------Preferences
		Course findCourse = courseRepo.findById(courseId).orElseThrow(()->new ResourceNotFoundException("Course with id: "+courseId+" not found"));
		System.out.println(findCourse);
		List<Preference> preferences = preferenceRepo.findAllPreferencesByCoursePreference(findCourse.getCourseName());
		System.out.println(preferences);
		Iterator<Preference> itr2 = preferences.iterator();
		while(itr2.hasNext()) {
			Preference preference = itr2.next();
			preferenceRepo.delete(preference);
		}
//		------------------------------------------------------------ Delete Course By ID
		courseRepo.deleteById(courseId);
//		-----------------------------------------------------------
		return "Course with id: "+courseId+" is deleted from Course List";
	}
	
	

}
