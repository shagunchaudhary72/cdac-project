package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "students_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Student extends BaseEntity {

	@Column(name = "name", nullable = false)
	private String name;
	@Column(name = "email", nullable = false,  unique = true)
	private String email;
	@Column(name = "age", nullable = false)
	private int age;
	@Embedded
	private Address address;
	@Column(name = "rank_in_comp")
	private int rankInComp;
	@Column(name = "marks", precision = 2)
	private double marksInComp;
//	@Embedded
//	private EducationQualification eduQualification;
	
	@OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
	private List<EducationQualification> educationQualifationList = new ArrayList<>();// ALWAYS init the collection , to
																						// avoid NPE

	public Student(String name, String email, int age) {
		super();
		this.name = name;
		this.email = email;
		this.age = age;
	}
	
	public Student(String name, String email, int age, Address address, double marksInComp) {
		super();
		this.name = name;
		this.email = email;
		this.age = age;
		this.address = address;
		this.marksInComp = marksInComp;
	}


	public void addEducation(EducationQualification eq) {
		educationQualifationList.add(eq);
		eq.setStudent(this);
	}

	public void removeEducation(EducationQualification eq) {
		educationQualifationList.remove(eq);
		eq.setStudent(null);
	}
	
}
