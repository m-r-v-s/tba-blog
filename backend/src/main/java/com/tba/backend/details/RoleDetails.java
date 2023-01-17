package com.tba.backend.details;

import java.util.Set;

public class RoleDetails {

    private String name;
    private Set<PrivilegeDetails> privilegeDetails;


    public RoleDetails(String name, Set<PrivilegeDetails> privilegeDetails) {
        this.name = name;
        this.privilegeDetails = privilegeDetails;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<PrivilegeDetails> getAuthorityDetails() {
        return privilegeDetails;
    }

    public void setAuthorityDetails(Set<PrivilegeDetails> privilegeDetails) {
        this.privilegeDetails = privilegeDetails;
    }

    @Override
    public String toString() {
        return "RoleDetails{" +
                "name='" + name + '\'' +
                ", authorityDetails=" + privilegeDetails +
                '}';
    }
}
