package com.app.services;

import java.util.ArrayList;
import java.util.Collections;
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
import com.app.dto.CollegeCourseStudentCount;
import com.app.dto.ShortlistedStudentDto;
import com.app.dto.StudentRankDto;
import com.app.dto.UpdationAndResultDates;
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
	public List<ShortlistedStudentDto> declareResult() {
		List<StudentRankDto> studentRanksDto = declareRanks();
		//List<ShortlistedStudentDto> shortlistedStudents = new ArrayList<ShortlistedStudentDto>();
		// int i = 1;
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

					double percentage = student.getEducationQualifationList().stream()
							.filter(edu -> edu.getType() == EducationType.HSC).mapToDouble(edu -> edu.getPercentage())
							.sum();
					System.out.println(" percentage : " + percentage);
					System.out.println("========");
					if (student.getRankInComp() <= college.getCutOffRank()) {
							System.out.println("===============");
						if (college.getVaccantSeats() > 0 && college.getMinimumPercentInBoards() <= percentage) {
							System.out.println("      " + college);
							System.out.println("========");

							Course course = courseRepo.findByCourseName(preference.getCoursePreference());
							University university = universityRepo.findById(1).get();
							ShortlistedStudent shortlistedStudent = new ShortlistedStudent(student, college, course,
									university);
							shortlistedRepo.save(shortlistedStudent);
							college.setVaccantSeats(college.getVaccantSeats() - 1);
							
						//	shortlistedStudents.add(shortlistedRepo.findBy);
							break;
						}
					}
				}
			}
		}
		return shortlistedRepo.findShortlistedStudents();
	}

	@Override
	public List<StudentRankDto> declareRanks() {
		//List<Student> students = studentRepo.findAllByOrderByMarksInCompDesc();
		
		List<Student> students = studentRepo.findAll();
		System.out.println(" in declareRanks : " + students);
		sortStudents(students);
		System.out.println(" in declareRanks( sorted students) : " + students);
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

	private List<Student> sortStudents(List<Student> students) {
		Collections.sort(students, (s2, s1) -> {

			double s1HscPer = s1.getEducationQualifationList().stream()
					.filter(edu -> edu.getType() == EducationType.HSC).mapToDouble(edu -> edu.getPercentage()).sum();

			double s2HscPer = s2.getEducationQualifationList().stream()
					.filter(edu -> edu.getType() == EducationType.HSC).mapToDouble(edu -> edu.getPercentage()).sum();

			double s1SscPer = s1.getEducationQualifationList().stream()
					.filter(edu -> edu.getType() == EducationType.SSC).mapToDouble(edu -> edu.getPercentage()).sum();

			double s2SscPer = s2.getEducationQualifationList().stream()
					.filter(edu -> edu.getType() == EducationType.SSC).mapToDouble(edu -> edu.getPercentage()).sum();

			if (s1.getMarksInComp() > s2.getMarksInComp())
				return 1;
			else if (s1.getMarksInComp() < s2.getMarksInComp())
				return -1;
			else if (s1.getMarksInComp() == s2.getMarksInComp() && s1HscPer > s2HscPer) {
				return 1;
			} else if (s1.getMarksInComp() == s2.getMarksInComp() && s1HscPer < s2HscPer) {
				return -1;
			} else if (s1.getMarksInComp() == s2.getMarksInComp() && s1HscPer == s2HscPer && s1SscPer > s2SscPer) {
				return 1;
			} else if (s1.getMarksInComp() == s2.getMarksInComp() && s1HscPer == s2HscPer && s1SscPer < s2SscPer) {
				return -1;
			} else if (s1.getMarksInComp() == s2.getMarksInComp() && s1HscPer == s2HscPer && s1SscPer == s2SscPer
					&& s1.getAge() > s2.getAge()) {
				return 1;
			} else if (s1.getMarksInComp() == s2.getMarksInComp() && s1HscPer == s2HscPer && s1SscPer > s2SscPer
					&& s1.getAge() < s2.getAge()) {
				return -1;
			}else {
				return 1;
			}
			
		});
		return students;
	}

	@Override
	public University updateDates(University university) {
		return universityRepo.save(university);
	}

	@Override
	public University getUniversityByEmail(String email) {
		return universityRepo.findByEmail(email).orElseThrow(()->new ResourceNotFoundException(email));
	}

	@Override
	public UpdationAndResultDates getAcademicDates(int id) {
		University university = universityRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("University Not Found"));
		return new UpdationAndResultDates(university.getResultDate(), university.getUpdationDate());
	}

	@Override
	public CollegeCourseStudentCount getCount() {
			Long student = studentRepo.findCountOfStudent();
			Long clg = collegeRepo.findCountOfCollege();
			Long course = courseRepo.findCountOfCourse();
		return new CollegeCourseStudentCount(student,course,clg);
	}

}
