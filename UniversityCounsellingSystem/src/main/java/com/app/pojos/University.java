package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="universities_tbl")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class University extends BaseEntity{
	
	@Column(name="university_name",length = 20,nullable = false)
	private String universityName;

}
