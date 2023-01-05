package com.gameduck.snowmanbackend.domain;

import static javax.persistence.CascadeType.*;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {

	@Id
	@GeneratedValue
	@Column(name = "user_id")
	private Long id;

	private String email;

	private String nickname;

	private String password;

	@OneToMany(mappedBy = "user", cascade = ALL)
	private List<Snowman> snowmanList = new ArrayList<>();

	@Enumerated(EnumType.STRING)
	private Role role;

	@Builder
	public User(String email, String nickname, String password, Role role) {
		this.email = email;
		this.nickname = nickname;
		this.password = password;
		this.role = role;
	}
}
