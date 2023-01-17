package com.tba.backend.repository;

import com.tba.backend.model.Privilege;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrivilegeRepository extends JpaRepository<Privilege, Long>
{
    Privilege findFirstByName(String name);
}
