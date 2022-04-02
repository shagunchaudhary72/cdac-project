package com.app.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CollegeRepository;
import com.app.dao.CoureseRepository;
import com.app.dao.PreferenceRepository;
import com.app.dao.ShortlistedStudentRepository;
import com.app.dao.StudentRepository;
import com.app.dao.UniversityRepository;
import com.app.dto.StudentRankDto;
import com.app.pojos.College;
import com.app.pojos.Course;
import com.app.pojos.EducationQualification;
import com.app.pojos.EducationType;
import com.app.pojos.Preference;
import com.app.pojos.ShortlistedStudent;
import com.app.pojos.Student;
import com.app.pojos.University;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	StudentRepository studentRepo;

	@Autowired
	PreferenceRepository preferenceRepo;

	@Autowired
	CollegeRepository collegeRepo;

	@Autowired
	CoureseRepository courseRepo;

	@Autowired
	ShortlistedStudentRepository shortlistedRepo;

	@Autowired
	UniversityRepository universityRepo;

	@Override
	public List<ShortlistedStudent> declareResult() {
		List<StudentRankDto> studentRanksDto = declareRanks();
		List<ShortlistedStudent> shortlistedStudents = new ArrayList<ShortlistedStudent>();
		int i = 1;
		for (StudentRankDto stu : studentRanksDto) {
			System.out.println("      " + stu);
			System.out.println("========");
			for (Preference preference : stu.getPreferences()) {
				System.out.println("  Preferences : " + preference);
				System.out.println("========");
				College college = null;
				if ((college = collegeRepo.findByName(preference.getCollegePreference())) != null) {

					Student student = studentRepo.findById(stu.getId())
							.orElseThrow(() -> new ResourceNotFoundException("Student not Found"));

					// EducationQualification education = (EducationQualification)
					// student.getEducationQualifationList().stream().filter( edu -> edu.getType()
					// == EducationType.HSC );
					double percentage = student.getEducationQualifationList().stream()
							.filter(edu -> edu.getType() == EducationType.HSC).mapToDouble(edu -> edu.getPercentage())
							.sum();
					System.out.println(" percentage : " + percentage);
					System.out.println("========");

					if (college.getVaccantSeats() > 0 && college.getMinimumPercentInBoards() <= percentage) {
						System.out.println("      " + college);
						System.out.println("========");

						Course course = courseRepo.findByCourseName(preference.getCoursePreference());
						University university = universityRepo.findById(1).get();
						ShortlistedStudent shortlistedStudent = new ShortlistedStudent(student, college, course,
								university);
						shortlistedRepo.save(shortlistedStudent);
						college.setVaccantSeats(college.getVaccantSeats() - 1);
						shortlistedStudents.add(shortlistedStudent);
						break;
					}
				}
			}
		}
		return shortlistedStudents;
	}

	@Override
	public List<StudentRankDto> declareRanks() {
		List<Student> students = studentRepo.findAllByOrderByMarksInCompDesc();
		List<StudentRankDto> studentsRankDto = new ArrayList<StudentRankDto>();
		int i = 1;
		for (Student student : students) {
			student.setRankInComp(i++);
			studentsRankDto.add(new StudentRankDto(student.getId(), student.getName(), student.getEmail(),
					student.getRankInComp(), student.getMarksInComp()));
		}

		for (StudentRankDto stu : studentsRankDto) {
			stu.setPreferences(preferenceRepo.findAllPreferencesByStudentId(stu.getId()));
		}
		return studentsRankDto;
	}

}
