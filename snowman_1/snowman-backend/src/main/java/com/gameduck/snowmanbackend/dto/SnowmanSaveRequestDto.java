package com.gameduck.snowmanbackend.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.gameduck.snowmanbackend.domain.Snowman;
import com.gameduck.snowmanbackend.domain.User;

import lombok.Data;

@Data
public class SnowmanSaveRequestDto {

	// private Long snowmanId;
	private User user;
	private String targetEmail;

	@NotEmpty
	private String headType;
	@NotEmpty
	private String bodyType;

	@NotEmpty
	@Size(min=1, max = 20, message = "1자 이상 20자 이내의 익명닉네임만 가능합니다.")
	private String authorNickname;

	@NotEmpty
	@Size(min=1)
	private String post;

	public Snowman toEntity() {
		return Snowman.builder()
			.user(this.user)
			.snowmanType(this.headType + this.bodyType)
			.authorNickname(this.authorNickname)
			.post(this.post)
			.build();
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "SnowmanSaveRequestDto{" +
			// "snowmanId=" + snowmanId +
			", user=" + user +
			", targetEmail='" + targetEmail + '\'' +
			", headType='" + headType + '\'' +
			", bodyType='" + bodyType + '\'' +
			", authorNickname='" + authorNickname + '\'' +
			", post='" + post + '\'' +
			'}';
	}
}
