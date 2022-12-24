package com.gameduck.snowmanbackend.apiController;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gameduck.snowmanbackend.config.dto.UserResponseDto;
import com.gameduck.snowmanbackend.service.UserService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
// @CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

	private final UserService userService;

	//조회
	@GetMapping("/users")
	public Result allUsers() {
		List<UserResponseDto> allUser = userService.findAllUser();

		return new Result(allUser);
	}

	@GetMapping("/users/me")
	public ResponseEntity<UserResponseDto> getMyUserInfo() {
		UserResponseDto myInfoBySecurity = userService.getMyInfoBySecurity();
		return ResponseEntity.ok((myInfoBySecurity));
	}

	@Data
	@AllArgsConstructor
	static class Result<T> {
		private T data;
	}
}
