package com.gameduck.snowmanbackend.config.service;

import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.gameduck.snowmanbackend.config.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
	private final UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		return userRepository.findByEmail(email)
			.map(this::createUserDetails)
			.orElseThrow(() -> new UsernameNotFoundException(email + " 을 DB에서 찾을 수 없습니다"));
	}

	private UserDetails createUserDetails(com.gameduck.snowmanbackend.domain.User user) {
		GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(user.getRole().toString());

		return new User(
			String.valueOf(user.getId()),
			user.getPassword(),
			Collections.singleton(grantedAuthority)
		);
	}
}