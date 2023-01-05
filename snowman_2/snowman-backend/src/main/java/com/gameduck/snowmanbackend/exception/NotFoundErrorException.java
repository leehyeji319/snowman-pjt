package com.gameduck.snowmanbackend.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class NotFoundErrorException extends RuntimeException {
	private static final long serialVersionUID = -6030631975042447289L;
	private String message;
}