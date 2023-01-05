package com.gameduck.snowmanbackend.config.dto;

import com.gameduck.snowmanbackend.domain.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponseDto {
	private String email;
	private String nickname;

	public static UserResponseDto of(User user) {
		return UserResponseDto.builder()
			.email(user.getEmail())
			.nickname(user.getNickname())
			.build();
	}

	public UserResponseDto(User user) {
		this.email = user.getEmail();
		this.nickname = user.getNickname();
	}
}