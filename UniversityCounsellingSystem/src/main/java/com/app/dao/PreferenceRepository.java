package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Preference;

public interface PreferenceRepository extends JpaRepository<Preference, Integer>{
	
	List<Preference> findAllPreferencesByStudentId(int studentid);
}
