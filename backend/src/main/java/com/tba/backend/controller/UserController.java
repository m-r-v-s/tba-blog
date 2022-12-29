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
    @CrossOrigin(origins= {"http://localhost:8080", "http://localhost:3000"})
    @PostMapping("/add")
    public String add(@RequestBody User user)
    {
        userService.saveUser(user);
        return "User added";
    }
    @GetMapping("/getAll")
    @CrossOrigin(origins= {"http://localhost:8080", "http://localhost:3000"})
    List<User> List(){
        return userService.getAllUsers();
    }
    @CrossOrigin(origins= {"http://localhost:8080", "http://localhost:3000"})
    @GetMapping("/get/{username}")
    public User User(@PathVariable String username){
        return userService.getUserByUsername(username);
    }
}
