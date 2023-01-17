package com.tba.backend.controller;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import com.tba.backend.model.User;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    private UserService userService;
    @CrossOrigin(origins= {"http://localhost:8080", "http://localhost:3000"})
    @PostMapping("/add")
    public String add(@RequestBody User user)
    {
        userService.saveUser(user);
        return "User added";
    }
    @GetMapping("(/getAll")
    @CrossOrigin(origins= {"http://localhost:8080", "http://localhost:3000"})
    List<User> List(){
        return userService.getAllUsers();
    }
    @CrossOrigin(origins= {"http://localhost:8080", "http://localhost:3000"})
    @GetMapping("/get/{username}")
    public User User(@PathVariable String username){
        return userService.getUserByUsername(username);
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/admin/{username}")
    public ResponseEntity<?> assignRole(@PathVariable String username, @RequestBody String role)
    {
        userService.setUserRole(role, username);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(value="/authenticate")
    public ResponseEntity<?> authenticateUser (@Valid @RequestBody User user){

        authenticationManager.authenticate( )
    }
}
