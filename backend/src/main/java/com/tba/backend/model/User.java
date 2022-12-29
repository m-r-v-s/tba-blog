package com.tba.backend.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity(name = "`user`")

public class User {
    private @Id
    @GeneratedValue Long id;
    @Column(unique = true)
    private String username;
    @Column(unique = true)
    private String password;
    private String firstname;
    private String lastname;
    private String country;
    @Column(unique = true)
    private String email;

    public User() {
    }

    ;

    public User(long id_, String username_, String password_, String firstname_, String lastname_, String country_, String email) {
        this.username = username_;
        this.password = password_;
        this.firstname = firstname_;
        this.lastname = lastname_;
        this.country = country_;
        this.email = email;
    }

    ;

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getCountry() {
        return country;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public String getPassword() {
        return password;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return this.firstname + " " + this.lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        String[] parts = name.split(" ");
        this.firstname = parts[0];
        this.lastname = parts[1];
    }

}

