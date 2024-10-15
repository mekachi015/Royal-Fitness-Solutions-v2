package com.example.royal.fitness.solutions.repository;

import com.example.royal.fitness.solutions.entity.UserQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserQueryRepo extends JpaRepository<UserQuery, Long> {
}
