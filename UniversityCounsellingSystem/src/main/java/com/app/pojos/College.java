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
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

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
	
	public College(String name, String email, String country, String city, String state, University uni, String phoneNo) {
		this.name = name;
		this.email = email;
		this.country = country;
		this.city = city;
		this.state = state;
		this.university = uni;
		this.phoneNo = phoneNo;
	}

	@Column(name="clg_name",length = 50,nullable = false,unique = true)
	private String name;
	
	@Column(name="clg_email",length = 100,nullable = false, unique = true)
	@NotBlank(message = "email can't be blank")
	@Email(message = "Email is not valid", regexp = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])")
	private String email;
	
	
	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY)	
	@JoinColumn(name = "university_id", nullable = false)
	private University university;

	@Column(name="phone_no")
	private String phoneNo;
	
	@Column(name="cut_off_rank")
	private Integer cutOffRank;
	
	@Column(name="percent_criteria",precision = 2, nullable = false)
	private double minimumPercentInBoards;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name ="colleges_courses",joinColumns =@JoinColumn(name="college_id"),
	inverseJoinColumns =  @JoinColumn(name="course_id"))
	private Set<Course> courses = new HashSet<Course>();
	
	@Column(name="country",length = 20,nullable = false)
	private String country;
	
	@Column(name="city",length = 20,nullable = false)
	private String city;
	
	@Column(name="state",length = 20,nullable = false)
	private String state;
	
	@Column(name="total_seats"	)
	private int totalSeats;
	
	@Column(name="vaccant_seats")
	private int vaccantSeats;
		

}
