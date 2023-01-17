package com.tba.backend.details;

public class PrivilegeDetails {

    private String name;

    public PrivilegeDetails(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "AuthorityDetails{" +
                "name='" + name + '\'' +
                '}';
    }
}
