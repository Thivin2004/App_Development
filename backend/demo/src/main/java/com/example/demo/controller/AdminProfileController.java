
package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.AdminProfile;
import com.example.demo.service.AdminProfileService;

@RestController
@RequestMapping("/api/admin")
public class AdminProfileController {
    @Autowired
    private AdminProfileService adminProfileService;

    @PostMapping("/create")
    public ResponseEntity<AdminProfile> addData(@RequestBody AdminProfile adminProfile) {
        AdminProfile obj = adminProfileService.create(adminProfile);
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }

    @GetMapping("/get/getall")
    public ResponseEntity<List<AdminProfile>> getAll() {
        try {
            List<AdminProfile> obj = adminProfileService.getAll();
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getby/{id}")
    public ResponseEntity<AdminProfile> getById(@PathVariable("id") Long id) {
        AdminProfile adminProfile = adminProfileService.getById(id);
        if (adminProfile != null) {
            return new ResponseEntity<>(adminProfile, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<AdminProfile> update(@PathVariable("id") Long id, @RequestBody AdminProfile adminProfile) {
        if (adminProfileService.updateDetails(id, adminProfile)) {
            return new ResponseEntity<>(adminProfile, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        if (adminProfileService.delete(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
