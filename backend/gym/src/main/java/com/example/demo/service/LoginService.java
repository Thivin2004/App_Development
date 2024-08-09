package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Login;
import com.example.demo.repository.LoginRepo;

@Service
public class LoginService {
    @Autowired
    LoginRepo lr;
    public Login create(Login l) {
        return lr.save(l);
    }

    public List<Login> getAll() {
        return lr.findAll();
    }

    public Login getById(int userId) {
        return lr.findById(userId).orElse(null);
    }

    public boolean updateDetails(int userId, Login l) {
        if (!lr.findById(userId).isPresent()) {
            return false;
        }
        try {
            lr.save(l);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean deleteEmployee(int userId) {
        if (!lr.findById(userId).isPresent()) {
            return false;
        }
        lr.deleteById(userId);
        return true;
    }
    
    
}
