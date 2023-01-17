package com.tba.backend.model;

import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.Set;
@Entity
@Table(name="authority")
public class Privilege implements Serializable {


    @Serial
    private static final long serialVersionUID = -880363398867865321L;

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    public Privilege(Long id, String name, Set<Role> roles) {
        this.id = id;
        this.name = name;
        this.roles = roles;
    }

    // @Enumerated(EnumType.STRING)
    private String name;

    @ManyToMany(mappedBy = "privileges")
    private Set<Role> roles;

    public Privilege() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
