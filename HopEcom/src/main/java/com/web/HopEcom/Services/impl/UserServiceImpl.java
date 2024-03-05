package com.web.HopEcom.Services.impl;

import com.web.HopEcom.Model.User;
import com.web.HopEcom.Services.UserService;

import com.web.HopEcom.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public User signUp(User user) {
        // Add validation and other logic as needed
        return userRepository.save(user);
    }

    @Override
    public User signIn(String username, String password) {
        // Add validation and other logic as needed
        return userRepository.findByUsername(username)
                .filter(u -> u.getPassword().equals(password))
                .orElse(null);
    }
}