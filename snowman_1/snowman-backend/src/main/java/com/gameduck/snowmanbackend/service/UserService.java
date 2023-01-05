package com.gameduck.snowmanbackend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gameduck.snowmanbackend.config.SecurityUtil;
import com.gameduck.snowmanbackend.config.dto.UserResponseDto;
import com.gameduck.snowmanbackend.config.repository.UserRepository;
import com.gameduck.snowmanbackend.domain.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	public UserResponseDto getMyInfoBySecurity() {
		return userRepository.findById(SecurityUtil.getCurrentMemberId())
			.map(UserResponseDto::of)
			.orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
	}

	//조회
	public List<UserResponseDto> findAllUser() {
		List<User> allUser = userRepository.findAll();
		List<UserResponseDto> collect = allUser.stream()
			.map(UserResponseDto::new)
			.collect(Collectors.toList());

		return collect;
	}

}