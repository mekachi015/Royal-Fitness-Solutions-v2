package com.example.royal.fitness.solutions.service;

import com.example.royal.fitness.solutions.entity.UserQuery;

public interface UserQueryService {
    //a method that is meant to send mail to the user and I
    void sendMail(UserQuery userQuery);

    //a method that saves the query in the database
    void saveQuery(UserQuery userQuery);
}
