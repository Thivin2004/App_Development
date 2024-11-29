
package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.UserProfile;
import com.example.demo.service.UserProfileService;

@RestController
@RequestMapping("/api/users")
public class UserProfileController {
    @Autowired
    private UserProfileService userProfileService;

    @PostMapping("/create")
    public ResponseEntity<UserProfile> addData(@RequestBody UserProfile userProfile) {
        UserProfile obj = userProfileService.create(userProfile);
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }

    @GetMapping("/get/getall")
    public ResponseEntity<List<UserProfile>> getAll() {
        try {
            List<UserProfile> obj = userProfileService.getAll();
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getby/{id}")
    public ResponseEntity<UserProfile> getById(@PathVariable("id") Long id) {
        UserProfile userProfile = userProfileService.getById(id);
        if (userProfile != null) {
            return new ResponseEntity<>(userProfile, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserProfile> update(@PathVariable("id") Long id, @RequestBody UserProfile userProfile) {
        if (userProfileService.updateDetails(id, userProfile)) {
            return new ResponseEntity<>(userProfile, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        if (userProfileService.delete(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
