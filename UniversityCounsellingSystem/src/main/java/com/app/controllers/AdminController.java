package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.StudentRankDto;
import com.app.dto.UpdationAndResultDates;
import com.app.pojos.Course;
import com.app.pojos.University;
import com.app.services.AdminServiceImpl;
import com.app.services.IAdminService;
import com.app.services.ICollegeService;
import com.app.services.ICourseService;
import com.app.services.IShortlistedStudentService;
import com.app.services.IStudentService;

@RestController
@RequestMapping(value = "/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

	@Autowired
	private ICollegeService collegeService;
	
	@Autowired
	private ICourseService courseService;
	
	@Autowired
	private IStudentService studentService;

	@Autowired
	private IShortlistedStudentService shortlistStudentService;
	
	@Autowired
	private IAdminService adminService;

	public AdminController() {
		System.out.println("in constructor of : " + getClass());
	}

//	@GetMapping("/colleges")
//	public ResponseEntity<?> fetchAllCollege() {
//		// getting data from service and returning to caller
//
//		return ResponseEntity.ok().body(collegeService.getAllCollege());
//
//	}

//	@GetMapping("/college/{id}")
//	public ResponseEntity<?> fetchCollegeDetails(@PathVariable int id) {
//
//		// getting college object by invoking service interface method
//		return ResponseEntity.ok().body(collegeService.getCollegeDetails(id));
//
//	}

	@DeleteMapping("/college/{id}")
	public ResponseEntity<?> deleteCollege(@PathVariable int id) {

		// deleting college by invoking service interface method
		return ResponseEntity.ok().body(collegeService.deleteCollege(id));

	}

	@GetMapping("/students")
	public ResponseEntity<?> fetchAllStudents() {
		return ResponseEntity.status(HttpStatus.OK).body(studentService.getAllStudents());
	}
	
	@GetMapping("/colleges")
	public ResponseEntity<?> fetchAllColleges(){
		return ResponseEntity.status(HttpStatus.OK).body(collegeService.getAllCollege());
	}
	
	@GetMapping("/courses")
	public ResponseEntity<?> fetchAllCourses(){
		return ResponseEntity.status(HttpStatus.OK).body(courseService.listOfCourses());
	}

	@GetMapping("/student/{id}")
	public ResponseEntity<?> fetchStudentDetails(@PathVariable int id) {
		return ResponseEntity.ok().body(studentService.getStudentDetails(id));
	}

	@DeleteMapping("/student/{id}")
	public ResponseEntity<?> deleteStudent(@PathVariable int id) {
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(studentService.deleteStudent(id));
	}

	@GetMapping("/shortlisted_students")
	public ResponseEntity<?> fetchAllSelectedStudents() {

		return ResponseEntity.ok().body(shortlistStudentService.getAllShortlistedStudents());

	}

	@GetMapping("/shortlisted_students/college/{id}")
	public ResponseEntity<?> fetchAllSelectedStudentsByCollege(@PathVariable int id) {

		return ResponseEntity.ok().body(shortlistStudentService.getAllShortlistedStudentsByCollege(id));

	}

	@GetMapping("/shortlisted_students/college/{collegeId}/course/{courseId}")
	public ResponseEntity<?> fetchAllSelectedStudentsByCollegeBranch(@PathVariable int collegeId,
			@PathVariable int courseId) {
		return ResponseEntity.ok().body(shortlistStudentService.getAllShortlistedStudentsByCollegeCourse(collegeId, courseId));
	}

	@GetMapping("/declare_result")
	public ResponseEntity<?> declareResult() {
		//List<StudentRankDto> result = adminService.declareRanks();
		//result.stream().forEach(System.out::println);
		return ResponseEntity.ok().body(adminService.declareResult());
	}
	
	@PostMapping("/course")
	public ResponseEntity<?> addNewCourse(@RequestBody Course course){
		return ResponseEntity.status(HttpStatus.CREATED).body(courseService.addNewCourse(course));
	}
	
	@PutMapping("/dateupdation/{emailId}")
	public ResponseEntity<?> updateDates(@PathVariable String emailId,@RequestBody UpdationAndResultDates dates){
		University university = adminService.getUniversityByEmail(emailId);
		university.setResultDate(dates.getResultDate());
		university.setUpdationDate(dates.getUpdationDate());
		return ResponseEntity.status(HttpStatus.CREATED).body(adminService.updateDates(university));
	}
	
	@GetMapping("/academic_dates")
	public ResponseEntity<?> getAcademicDates(){
		return ResponseEntity.ok().body(adminService.getAcademicDates(1));
	}
	
	@GetMapping("/count")
	public ResponseEntity<?> getCounts(){
		return ResponseEntity.ok().body(adminService.getCount());
	}
}
