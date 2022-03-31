package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "colleges_tbl")
public class College extends BaseEntity{
	
	@Column(name="clg_name",length = 50,nullable = false)
	private String name;
	
	@Column(name="clg_email",length = 100,nullable = false)
	private String email;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "university_id", nullable = false)
	private University university;
	
	@Column(name="cut_off_rank")
	private int cutOffRank;
	
	@Column(name="percent_criteria",precision = 2)
	private double minimumPercentInBoards;
	
	@ManyToMany
	@JoinTable(name ="colleges_courses",joinColumns =@JoinColumn(name="college_id"),
	inverseJoinColumns =  @JoinColumn(name="course_id"))
	private Set<Course> courses = new HashSet<Course>();
	
	@Column(name="city",length = 20,nullable = false)
	private String city;
	
	@Column(name="state",length = 20,nullable = false)
	private String state;
	
	@Column(name="total_seats",nullable = false)
	private int totalSeats;
	
	@Column(name="vaccant_seats",nullable = false)
	private int vaccantSeats;
	
	

}
