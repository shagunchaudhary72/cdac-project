package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="university_tbl")
public class University extends BaseEntity{
	@Column(name="university_name", unique=true)
	private String universityName;
}
