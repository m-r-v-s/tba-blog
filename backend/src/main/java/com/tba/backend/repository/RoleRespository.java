package com.tba.backend.repository;
import java.util.Set;

import com.tba.backend.model.ERole;
import com.tba.backend.model.Role;
import com.tba.backend.model.Privilege;
import jakarta.persistence.Enumerated;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRespository extends JpaRepository<Role, Long> {

    Role findFirstByName(String name);

    Set<Privilege> findPrivilegesByRoleID(Long role_id);

}
