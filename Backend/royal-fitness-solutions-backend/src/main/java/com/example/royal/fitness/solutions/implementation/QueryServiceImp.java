package com.example.royal.fitness.solutions.implementation;

import com.example.royal.fitness.solutions.entity.UserQuery;
import com.example.royal.fitness.solutions.repository.UserQueryRepo;
import com.example.royal.fitness.solutions.service.UserQueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class QueryServiceImp implements UserQueryService {

    @Autowired
    private UserQueryRepo userQueryRepo;

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public void sendMail(UserQuery userQuery) {
        // Mail configuration (build message)
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(userQuery.getEmailAddress());
        message.setSubject("Query Received Confirmation");
        message.setText("Dear " + userQuery.getName() + " " + userQuery.getLastName() + ",\n\n" +
                "Thank you for reaching out. We've received your query:\n\n" +
                userQuery.getQuery() + "\n\nWe'll get back to you shortly.\n\nRegards,\nSupport Team");

        // Send mail
        mailSender.send(message);
    }

    @Override
    public void saveQuery(UserQuery userQuery) {
        userQueryRepo.save(userQuery);
    }


}
