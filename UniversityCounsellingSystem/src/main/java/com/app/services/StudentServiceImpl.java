package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.NotFoundException;
import com.app.dao.StudentRepository;
import com.app.pojos.Student;


@Service
@Transactional
public class StudentServiceImpl implements IStudentService {
	
	@Autowired
	private StudentRepository studentRepo;

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
		return studentRepo.findById(id).orElseThrow(()->new NotFoundException("There is no student with id: "+id));
	}

	@Override
	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		return studentRepo.findAll();
	}

}
