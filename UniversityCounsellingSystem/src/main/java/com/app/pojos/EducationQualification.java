package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="education_qualification_tbl",uniqueConstraints = @UniqueConstraint(columnNames = { "edu_type", "student_id"}))
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EducationQualification extends BaseEntity{
	@Enumerated(EnumType.STRING)
	@Column(length=20,name="edu_type")
	private EducationType type;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20,name="stream_name")
	private StreamName streamName;
	
	@Column(name="name_of_institute",length = 50)
	private String nameOfInstitute;
	
	@Column(name = "percentage")
	private double percentage;
	
	@Column(name = "year_of_passing")
	private int yearOfPassing;
	
	@JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="student_id")
	private Student student;

	public EducationQualification(EducationType type, StreamName streamName, String nameOfInstitute, double percentage,
			int yearOfPassing) {
		super();
		this.type = type;
		this.streamName = streamName;
		this.nameOfInstitute = nameOfInstitute;
		this.percentage = percentage;
		this.yearOfPassing = yearOfPassing;
	}	
	
}
