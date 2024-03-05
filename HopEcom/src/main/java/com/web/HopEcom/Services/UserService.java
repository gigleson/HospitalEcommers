package com.web.HopEcom.Services;

import com.web.HopEcom.Model.User;

public interface UserService {
    User signUp(User user);
    User signIn(String username, String password);
}