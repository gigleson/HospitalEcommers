package com.web.HopEcom.controllers;

import com.web.HopEcom.Model.User;
import com.web.HopEcom.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<User> signUp(@RequestBody User user) {
        User newUser = userService.signUp(user);
        return ResponseEntity.ok(newUser);
    }

    @PostMapping("/signin")
    public ResponseEntity<User> signIn(@RequestBody User credentials) {
        String username = credentials.getUsername();
        String password = credentials.getPassword();

        User user = userService.signIn(username, password);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
