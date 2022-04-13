package com.app.exception_handler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.ValidationException;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.custom_exceptions.AuthenticationException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ErrorResponse;

/*annotation required to tell SC that this is the central exception handler for all controllers*/
@ControllerAdvice 
public class CentralExceptionHandler extends ResponseEntityExceptionHandler {

	//method to handle invalid arguments
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		System.out.println("In @Valid Error Handler\n");
		//storing exception fields and messages
		Map<String, String> exceptionMap = ex.getFieldErrors()	// provides list errors associated to "ex"
											.stream()
											.collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
		System.out.println(exceptionMap.values().toString());
		return ResponseEntity.badRequest().body(exceptionMap);
	}
	
	@ExceptionHandler(AuthenticationException.class)
	public ResponseEntity<?> handleAuthentication(AuthenticationException e){
		return ResponseEntity.badRequest().body(new ErrorResponse("Authentication Error",e.getMessage()));
	}
	
	//method to handle resource not found exceptions centrally and returns error response using DTO
	@ExceptionHandler( ResourceNotFoundException.class )
	public ResponseEntity<?> resourceNotFoundExceptionHandler(ResourceNotFoundException ex){
		//creating ErrorResponse
		ErrorResponse error = new ErrorResponse("resource not found", ex.getMessage());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
	}
	
	//method to handle runtime exceptions centrally and return error Response in DTO( message, time )
	@ExceptionHandler( RuntimeException.class)
	public ResponseEntity<?> runtimeExceptionHandler(RuntimeException ex){
		ErrorResponse error = new ErrorResponse( "run time exception",ex.getMessage());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
	}
	
	@ExceptionHandler(ConstraintViolationException.class)
	protected ResponseEntity<Object> handleValidationNotValid(ConstraintViolationException ex) {
		System.out.println("In @Valid Error Handler\n");
		//storing exception fields and messages
		Map<String, String> exceptionMap = new HashMap<>();
		for (ConstraintViolation violation : ex.getConstraintViolations()) {
			System.out.println(violation.getMessage());
			exceptionMap.put(violation.getPropertyPath().toString(), violation.getMessage());
		}
		return ResponseEntity.badRequest().body(exceptionMap.values());
	}
	
}
