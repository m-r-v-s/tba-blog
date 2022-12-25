package com.tba.backend.service;

import com.tba.backend.model.User;
import org.springframework.context.annotation.Bean;

import java.util.List;

public interface UserService {

    public User saveUser(User user);
    public List<User> getAllUsers();
}
