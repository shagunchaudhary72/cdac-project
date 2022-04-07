package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "colleges_tbl")
public class College extends BaseEntity{
	
	public College(String name, String email, String city, String state, University uni) {
		this.name = name;
		this.email = email;
		this.city = city;
		this.state = state;
		this.university = uni;
	}

	@Column(name="clg_name",length = 50,nullable = false)
	private String name;
	
	@Column(name="clg_email",length = 100,nullable = false, unique = true)
	private String email;
	
	
	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY)	
	@JoinColumn(name = "university_id", nullable = false)
	private University university;

	
	@Column(name="cut_off_rank")
	private Integer cutOffRank;
	
	@Column(name="percent_criteria",precision = 2, nullable = false)
	private double minimumPercentInBoards;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name ="colleges_courses",joinColumns =@JoinColumn(name="college_id"),
	inverseJoinColumns =  @JoinColumn(name="course_id"))
	private Set<Course> courses = new HashSet<Course>();
	
	@Column(name="city",length = 20,nullable = false)
	private String city;
	
	@Column(name="state",length = 20,nullable = false)
	private String state;
	
	@Column(name="total_seats"	)
	private int totalSeats;
	
	@Column(name="vaccant_seats")
	private int vaccantSeats;
		

}
