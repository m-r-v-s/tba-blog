package com.tba.backend.model;

import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name="role")
public class Role implements Serializable {


    @Serial
    private static final long serialVersionUID = 3116719180711813361L;
    @Id
    @GeneratedValue
     private Long id;

    // @Enumerated(EnumType.STRING)
    private String name;


    @ManyToOne
    @JoinColumn(name="role_id")
    private Set<User> users;


    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name ="role_privilege",
            joinColumns = @JoinColumn(name="role_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name="privilege_id", referencedColumnName = "id"))
    private Set<Privilege> privileges;

    public Role(String name) {
        this.name = name;
    }

    public Role() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public Set<Privilege> getPrivileges() {
        return privileges;
    }

    public void setPrivileges(Set<Privilege> privileges) {
        this.privileges = privileges;
    }
}

