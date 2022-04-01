package com.app.exc_handler;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.app.custom_exceptions.AuthenticationException;
import com.app.custom_exceptions.NotFoundException;
import com.app.dto.ErrorResponse;

@ControllerAdvice
public class GlobalExcHandler {
	
	@ExceptionHandler(AuthenticationException.class)
	public ResponseEntity<?> handleAuthentication(AuthenticationException e){
		return ResponseEntity.badRequest().body(new ErrorResponse("Authentication Error",e.getMessage()));
	}
	
	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<?> handleStudentNotFound(NotFoundException e){
		return ResponseEntity.badRequest().body(new ErrorResponse("Not Found Error",e.getMessage()));
	}

}
