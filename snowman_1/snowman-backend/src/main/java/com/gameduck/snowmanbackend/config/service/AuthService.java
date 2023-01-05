package com.gameduck.snowmanbackend.config.service;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gameduck.snowmanbackend.config.TokenProvider;
import com.gameduck.snowmanbackend.config.dto.TokenDto;
import com.gameduck.snowmanbackend.config.dto.UserRequestDto;
import com.gameduck.snowmanbackend.config.dto.UserResponseDto;
import com.gameduck.snowmanbackend.config.repository.UserRepository;
import com.gameduck.snowmanbackend.domain.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {
	private final AuthenticationManagerBuilder managerBuilder;
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final TokenProvider tokenProvider;

	public UserResponseDto signup(UserRequestDto requestDto) {
		if (userRepository.existsByEmail(requestDto.getEmail())) {
			throw new RuntimeException("이미 가입되어 있는 유저입니다");
		}

		User user = requestDto.toUser(passwordEncoder);
		return UserResponseDto.of(userRepository.save(user));
	}

	public TokenDto login(UserRequestDto requestDto) {
		UsernamePasswordAuthenticationToken authenticationToken = requestDto.toAuthentication();

		Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);

		return tokenProvider.generateTokenDto(authentication, requestDto);
	}

}