package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "students_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Student extends BaseEntity{
	
	@Column(name="name", nullable = false)
	private String name;
	@Column(name="email", nullable = false)
	private String email;
	@Column(name="age", nullable= false)
	private int age;
	@Column(name="address", nullable= false)
	private String address;
	@Column(name = "rank_in_comp")
	private int rankInComp;
	@Column(name = "marks", nullable = false, precision = 2)
	private double marksInComp;
	@Column(name = "qualification", nullable = false)
	private String eduQualification;
	
}
