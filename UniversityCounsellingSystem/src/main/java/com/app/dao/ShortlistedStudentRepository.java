package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.dto.ShortlistedStudentDto;
import com.app.pojos.ShortlistedStudent;
import com.app.pojos.Student;

@Repository
public interface ShortlistedStudentRepository extends JpaRepository<ShortlistedStudent, Integer> {

	//method to get list of shortlisted students
	@Query("select "
			+ "new com.app.dto.ShortlistedStudentDto( s.student.id, s.student.name, s.student.marksInComp, "
			+ "s.student.rankInComp , s.college.id, s.college.name, s.course.id, s.course.courseName, s.university.universityName)"
			+ " from ShortlistedStudent s ")
	List<ShortlistedStudentDto> findShortlistedStudents();
	
	// method to get list of shortlisted students by college id
	@Query("select "
			+ "new com.app.dto.ShortlistedStudentDto( s.student.id, s.student.name, s.student.marksInComp, "
			+ "s.student.rankInComp , s.college.id, s.college.name, s.course.id, s.course.courseName, s.university.universityName)"
			+ " from ShortlistedStudent s "
			+ "where s.college.id=:collegeId")
	List<ShortlistedStudentDto> findShortlistedStudentsByCollegeId(@Param("collegeId") int collegeId);

	/*
	 * method to get list of shortlisted students by college id and course id(i.e.,
	 * students in specific course of specific college)
	 */
	@Query("select "
			+ "new com.app.dto.ShortlistedStudentDto( s.student.id, s.student.name, s.student.marksInComp,"
			+ " s.student.rankInComp , s.college.id, s.college.name, s.course.id, s.course.courseName, s.university.universityName) "
			+ "from ShortlistedStudent s"
			+ " where s.college.id=:collegeId and s.course.id=:courseId")
	List<ShortlistedStudentDto> findShortlistedStudentsByCollegeIdCourseId(@Param("collegeId") int collegeId,
			@Param("courseId") int courseId);
	
	ShortlistedStudent findByStudentId(int studentId);
}
