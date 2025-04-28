package com.devops.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devops.crud.controller.UserController;
import com.devops.crud.entity.User;
import com.devops.crud.model.Status;
import com.devops.crud.repository.UserRepository;

@Service
public class UserService implements UserController {

	@Autowired
	private UserRepository userRepo;

	@Override
	public List<User> getUsers() {
		List<User> users = userRepo.findAll();
		return users;
	}

	@Override
	public Status create(User user) {
		userRepo.save(user);
		Status status = new Status("Created Successfully", "0000");
		return status;
	}

	@Override
	public User getUser(Long id) {
		// TODO Auto-generated method stub
		return userRepo.findById(id).get();
	}

	@Override
	public Status update(User user) {
		User userOpt = userRepo.findById(user.getId()).get();
		userOpt.setFirstName(user.getFirstName());
		userOpt.setMobileNo(user.getMobileNo());
		userOpt.setEmail(user.getEmail());
		userOpt.setAddress(user.getAddress());
		userRepo.save(userOpt);
		Status status = new Status("Updated Successfully", "0000");
		return status;
	}

	public static void main(String[] args) {
		int a[] = { 1, 3, 5, 6, 8, 11, 13, 6, 2 };
		int target = 2;
		int midVal = binearySearch(a, target);

		System.err.println(midVal);
	}

	public static int binearySearch(int a[], int target) {
		int left = 0;
		int right = a.length - 1;

		while (left <= right) {
			int mid = (left + right) / 2;
			System.err.println("Mid::" + mid);
			if (a[mid] == target) {
				return mid;
			} else if (a[mid] < target) {
				left = mid + 1;
				System.err.println("Left::" + left);
			} else {
				right = mid - 1;
				System.err.println("Right::" + right);
			}
		}
		return -1;

	}

}
