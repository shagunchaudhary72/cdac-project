package com.app.dto;

import java.util.List;

import com.app.pojos.Preference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class StudentRankDto {

	private int id;
	private String name;
	private String email;
	private int rankInComp;
	private double marksInComp;
	private List<Preference> preferences;
	
	public StudentRankDto(int id, String name, String email, int rankInComp, double marksInComp) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.rankInComp = rankInComp;
		this.marksInComp = marksInComp;
	}
	
	
}
