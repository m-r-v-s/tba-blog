package com.tba.backend.controller;

import com.tba.backend.model.User;
import com.tba.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user)
    {
        userService.saveUser(user);
        return "User added";
    }
    @GetMapping("/getAll")
    List<User> List(){
        return userService.getAllUsers();
    }

}
