
package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Sign;
import com.example.demo.service.SignService;

@RestController
@RequestMapping("/api/Sign")
public class SignController {
    @Autowired
    private SignService ss;

    @PostMapping("/create")
    public ResponseEntity<String> addData(@RequestBody Sign s) {
        // Check if the email already exists
        if (ss.emailExists(s.getEmail())) {
            return new ResponseEntity<>("Email already exists", HttpStatus.CONFLICT);
        }

        // Create the new user
        Sign obj = ss.create(s);
        return new ResponseEntity<>("User created successfully", HttpStatus.CREATED);
    }

    @GetMapping("/get/getall")
    public ResponseEntity<List<Sign>> getAll() {
        try {
            List<Sign> obj = ss.getAll();
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getby/{userId}")
    public ResponseEntity<Sign> getById(@PathVariable("userId") int userId) {
        Sign sign = ss.getById(userId);
        if (sign != null) {
            return new ResponseEntity<>(sign, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{userId}")
    public ResponseEntity<Sign> update(@PathVariable("userId") int userId, @RequestBody Sign s) {
        if (ss.updateDetails(userId, s)) {
            return new ResponseEntity<>(s, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/del/{userId}")
    public ResponseEntity<Void> delete(@PathVariable("userId") int userId) {
        if (ss.deleteEmployee(userId)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
