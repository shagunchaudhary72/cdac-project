package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.NotFoundException;
import com.app.dao.PreferenceRepository;
import com.app.dao.StudentRepository;
import com.app.pojos.Preference;
import com.app.pojos.Student;


@Service
@Transactional
public class PreferenceServiceImpl implements IPreferenceService {
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private PreferenceRepository preferenceRepo;

	@Override
	public String addPreference(Preference preference, int studentId) {
		Student student = studentRepo.findById(studentId).orElseThrow(()->new NotFoundException("student with id: "+studentId+" not found."));
		preference.setStudent(student);
		Preference prefer = preferenceRepo.save(preference);
		return "Added Successfully "+prefer.getId();
	}

}
