package com.example.royal.fitness.solutions.controller;

import com.example.royal.fitness.solutions.entity.UserQuery;
import com.example.royal.fitness.solutions.service.UserQueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("contact")
public class QueryController {

    @Autowired
    private UserQueryService queryService;

    @PostMapping("/submit")
//    public ResponseEntity<String> submitQuery(@RequestBody UserQuery userQuery){
//        queryService.saveQuery(userQuery);
//        queryService.sendMail(userQuery);
//
//        return ResponseEntity.ok("query sent");
//    }
    public ResponseEntity<String> submitQuery(@RequestBody UserQuery userQuery) {
        try {
            // Save query to database
            queryService.saveQuery(userQuery);

            // Send email confirmation
            queryService.sendMail(userQuery);

            return ResponseEntity.ok("Query submitted successfully");
        } catch (Exception e) {
            // Log the error for debugging
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing your query");
        }
    }

}
