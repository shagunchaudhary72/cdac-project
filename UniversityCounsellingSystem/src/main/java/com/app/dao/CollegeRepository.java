package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.College;

public interface CollegeRepository extends JpaRepository<College, Integer> {

	// custom query to get college data based on login email id
	@Query("select c from College c where c.email=:email")
	College findByEmail(@Param("email") String email);

}
