package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EducationQualification {
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
}
