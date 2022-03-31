package com.app.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


//DTO to transfer error from central exception handler
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ErrorResponse {

	private String message;
	private LocalDateTime timeStamp;
}
