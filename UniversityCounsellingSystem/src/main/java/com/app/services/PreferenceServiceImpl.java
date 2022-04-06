package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
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
	public List<Preference> addPreference(Preference preference, int studentId) {
		Student student = studentRepo.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("student with id: " + studentId + " not found."));
		preference.setStudent(student);
		Preference prefer = preferenceRepo.save(preference);
		List<Preference> preferences = preferenceRepo.findAllPreferencesByStudentId(studentId);
		return preferences;
	}

	@Override
	public List<Preference> deletePreference(int studentId, int preferenceId) {
		Student student = studentRepo.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("student with id: " + studentId + " not found."));
		Preference preference = preferenceRepo.findById(preferenceId)
				.orElseThrow(() -> new ResourceNotFoundException("Preference with id: " + preferenceId + " not found."));
		preferenceRepo.delete(preference);
		return preferenceRepo.findAllPreferencesByStudentId(studentId);
	}

	@Override
	public List<Preference> getAllPreferencesOfStudent(int studentId) {
		return preferenceRepo.findAllPreferencesByStudentId(studentId);
	}

}
