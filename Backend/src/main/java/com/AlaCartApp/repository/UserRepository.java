package com.AlaCartApp.repository;

import com.AlaCartApp.models.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <User, Long>{

    User findByEmail(String email);
}
