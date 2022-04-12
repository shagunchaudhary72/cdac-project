package com.app.dto;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class UpdationAndResultDates {
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	LocalDate resultDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	LocalDate updationDate;

}
