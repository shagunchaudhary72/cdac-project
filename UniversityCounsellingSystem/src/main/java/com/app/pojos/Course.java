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
	@Column(name="course_name",length = 100,nullable = false,unique = true)
	private String courseName;
	
}
