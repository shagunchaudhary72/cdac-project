
package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "shortlisted_students_tbl")
public class ShortlistedStudent extends BaseEntity {

	@OneToOne
	@JoinColumn(name = "student_id", nullable = false)
	private Student student;

	@OneToOne
	@JoinColumn(name = "college_id", nullable = false)
	private College college;

	@OneToOne
	@JoinColumn(name = "course_id", nullable = false)
	private Course course;

	@OneToOne
	@JoinColumn( name = "university_id", nullable = false )
	private University university;
	
}
