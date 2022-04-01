/**
 * 
 */
package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.College;

@Repository
public interface CollegeRepository extends JpaRepository<College, Integer> {

}
