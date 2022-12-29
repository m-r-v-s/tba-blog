package com.tba.backend.repository;

import com.tba.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins= {"http://localhost/8080", "http://localhost/3000"})
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findFirstByUsername(String username);
}
