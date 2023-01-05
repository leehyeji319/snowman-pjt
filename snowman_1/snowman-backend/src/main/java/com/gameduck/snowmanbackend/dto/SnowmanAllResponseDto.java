package com.gameduck.snowmanbackend.dto;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.gameduck.snowmanbackend.domain.User;

import lombok.Data;

@Data
public class SnowmanAllResponseDto {

	private String email;
	private String nickname;

	private List<SnowmanAllUserResponseDto> snowmans;

	public SnowmanAllResponseDto(Optional<User> user) {
		email = user.get().getEmail();
		nickname = user.get().getNickname();
		snowmans = user.get().getSnowmanList().stream()
			.map(SnowmanAllUserResponseDto::new)
			.collect(Collectors.toList());

	}
}
