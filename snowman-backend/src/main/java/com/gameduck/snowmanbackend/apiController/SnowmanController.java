package com.gameduck.snowmanbackend.apiController;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gameduck.snowmanbackend.config.repository.UserRepository;
import com.gameduck.snowmanbackend.domain.Snowman;
import com.gameduck.snowmanbackend.domain.User;
import com.gameduck.snowmanbackend.dto.ApiResponse;
import com.gameduck.snowmanbackend.dto.SnowmanAllResponseDto;
import com.gameduck.snowmanbackend.dto.SnowmanAllUserResponseDto;
import com.gameduck.snowmanbackend.dto.SnowmanSaveRequestDto;
import com.gameduck.snowmanbackend.repository.SnowmanRepository;
import com.gameduck.snowmanbackend.service.SnowmanService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class SnowmanController {

	private final SnowmanService snowmanService;
	private final SnowmanRepository snowmanRepository;
	private final UserRepository userRepository;

	@PostMapping("/snowmans")
	public ResponseEntity<?> saveSnowman(@RequestBody SnowmanSaveRequestDto requestDto) {
		/**
		 System.out.println(requestDto.getPost());
		 System.out.println(requestDto.getHeadType());
		 System.out.println(requestDto.getBodyType());
		 System.out.println(requestDto.getTargetEmail());
		 System.out.println(requestDto.getAuthorNickname()); **/

		Snowman snowman = snowmanService.saveSnowman(requestDto);

		return ResponseEntity.ok(new ApiResponse(true, "Snowman Created Successfully!"));
	}

	@GetMapping("/snowmans/{email}")
	public SnowmanAllResponseDto findUserAllSnowmans(@PathVariable("email") String email) {
		return snowmanService.findUserAllSnowmans(email);
	}

	@Data
	@AllArgsConstructor
	static class Result<T> {
		private T data;
	}
}
