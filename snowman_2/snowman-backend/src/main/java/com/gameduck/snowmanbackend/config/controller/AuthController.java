package com.gameduck.snowmanbackend.config.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.gameduck.snowmanbackend.config.dto.TokenDto;
import com.gameduck.snowmanbackend.config.dto.UserRequestDto;
import com.gameduck.snowmanbackend.config.dto.UserResponseDto;
import com.gameduck.snowmanbackend.config.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
// @CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {
	private final AuthService authService;

	@PostMapping("/auth/signup")
	public ResponseEntity<UserResponseDto> signup(@RequestBody UserRequestDto requestDto) {
		return ResponseEntity.ok(authService.signup(requestDto));
	}

	@PostMapping("/auth/login")
	public ResponseEntity<TokenDto> login(@RequestBody UserRequestDto requestDto) {
		return ResponseEntity.ok(authService.login(requestDto));
	}
}