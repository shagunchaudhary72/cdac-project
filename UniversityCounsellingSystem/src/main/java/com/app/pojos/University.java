package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="university_tbl")
public class University extends BaseEntity{
	@Column(name="university_name", unique=true)
	@NotBlank(message = "University name can't be blank")
	private String universityName;
}
