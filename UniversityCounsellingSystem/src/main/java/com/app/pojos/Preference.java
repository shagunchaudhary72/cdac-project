
package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "preferences_tbl")
public class Preference extends BaseEntity {

	// uni dir from preference *----->1 Student

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "student_id")
	private Student student;

	@NotEmpty(message = "college preference must be given")
	private String collegePreference; // college preference by student

	@NotEmpty(message = "course preference must be given")
	private String coursePreference; // course preference by student

	public Preference(String collegePreference, String coursePreference) {
		super();
		this.collegePreference = collegePreference;
		this.coursePreference = coursePreference;
	}

}
