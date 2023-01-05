package com.gameduck.snowmanbackend.domain;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Snowman {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "snowman_id")
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;

	private String snowmanType;
  
	private String authorNickname;

	@Lob
	private String post;

	@Builder
	public Snowman(User user, String snowmanType, String authorNickname, String post) {
		this.user = user;
		this.snowmanType = snowmanType;
		this.authorNickname = authorNickname;
		this.post = post;
	}

}
