package com.gameduck.snowmanbackend.config.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gameduck.snowmanbackend.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);
	// User findByEmail(String email);
	boolean existsByEmail(String email);
}
