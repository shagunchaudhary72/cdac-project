package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.dto.ShortlistedStudentDto;
import com.app.pojos.ShortlistedStudent;

@Repository
public interface ShortlistedStudentRepository extends JpaRepository<ShortlistedStudent, Integer> {

	// method to get list of shortlisted students by college id
	@Query("select new com.app.dto.ShortlistedStudentDto(s.student.name, s.student.marksInComp, s.student.rankInComp , s.college.name, s.university.universityName) from ShortlistedStudent s where s.college.id=:collegeId")
	List<ShortlistedStudentDto> findShortlistedStudentsByCollegeId(@Param("collegeId") int collegeId);

}
