package com.gameduck.snowmanbackend.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UnauthorizedErrorException extends Exception {
	private static final long serialVersionUID = 7460949434885505331L;
	private String message;
}