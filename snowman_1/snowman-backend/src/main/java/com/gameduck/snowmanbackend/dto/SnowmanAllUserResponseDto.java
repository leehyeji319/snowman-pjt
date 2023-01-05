package com.gameduck.snowmanbackend.dto;

import com.gameduck.snowmanbackend.domain.Snowman;

import lombok.Data;

@Data
public class SnowmanAllUserResponseDto {

	private Long userId;
	private String email;
	private String nickname;
	private Long snowmanId;
	private String snowmanType;
	private String authorNickname;
	private String post;

	public SnowmanAllUserResponseDto(Snowman snowman) {
		this.userId = snowman.getUser().getId();
		this.email = snowman.getUser().getEmail();
		this.nickname = snowman.getUser().getNickname();
		this.snowmanId = snowman.getId();
		this.snowmanType = snowman.getSnowmanType();
		this.authorNickname = snowman.getAuthorNickname();
		this.post = snowman.getPost();
	}

}
