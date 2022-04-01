package com.app.custom_exceptions;

public class AuthenticationException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = -2139985096933511280L;

	public AuthenticationException(String mesg) {
		super(mesg);
	}
}
