package com.l3dsi.authservice.repositories;

import java.util.Optional;

import com.l3dsi.authservice.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

}