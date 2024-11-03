package com.devops.crud.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devops.crud.entity.User;
import com.devops.crud.model.Status;

@RestController
public interface UserController {

	@GetMapping("/users")
	public List<User> getUsers();

	@PostMapping("/user")
	public Status create(User user);

	@GetMapping("/user")
	public User getUser(@RequestParam Long id);

	@PutMapping("/user")
	public Status update(User user);
}
