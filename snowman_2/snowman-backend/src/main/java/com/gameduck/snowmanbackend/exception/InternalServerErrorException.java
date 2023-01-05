package com.gameduck.snowmanbackend.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class InternalServerErrorException  extends RuntimeException {
	private static final long serialVersionUID = -1216483704160273807L;
	private String message;
}