package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="courses_tbl")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Course extends BaseEntity{
	@Column(name="course_name",length = 100,nullable = false)
	private String courseName;
}
