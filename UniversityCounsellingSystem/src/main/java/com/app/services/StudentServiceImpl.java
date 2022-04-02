package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.StudentRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Student;
import com.app.pojos.User;

@Service
@Transactional
public class StudentServiceImpl implements IStudentService {

	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public Student addStudent(Student student) {
		// TODO Auto-generated method stub
		return studentRepo.save(student);
	}

	@Override
	public Student updateStudent(Student student) {
		// TODO Auto-generated method stub
		return studentRepo.save(student);
	}

	@Override
	public Student getStudentDetails(int id) {
		return studentRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("There is no student with id: " + id));
	}

	@Override
	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		return studentRepo.findAll();
	}

	@Override
	public List<Student> deleteStudent(int id) {
		Student student = studentRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student Not FOund with StudentID : " + id));
		User user = userRepo.findByEmail(student.getEmail())
				.orElseThrow(() -> new ResourceNotFoundException("User Not Found"));
		userRepo.delete(user);
		studentRepo.delete(student);
		return studentRepo.findAll();
	}

}
