package com.app.custom_exceptions;

public class NotFoundException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = -3523571054117701097L;

	public NotFoundException(String mesg) {
		super(mesg);
	}

}
