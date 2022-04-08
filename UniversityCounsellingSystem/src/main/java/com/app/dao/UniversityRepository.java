package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.University;

public interface UniversityRepository extends JpaRepository<University, Integer>{

	//method to find university by email
	Optional<University> findByEmail(String email);
}
