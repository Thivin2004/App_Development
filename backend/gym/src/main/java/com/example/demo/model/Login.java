package com.example.demo.model;

// import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Login {
    @Id

    @GeneratedValue
    int userId;
    String emailId,password;
    public Login()
    {

    }
    public Login(int userId, String emailId, String password) {
        this.userId = userId;
        this.emailId = emailId;
        this.password = password;
    }
    public int getUserId() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    
     @OneToOne( mappedBy = "login", cascade = CascadeType.ALL)
   
    @JsonManagedReference

    Sign sign;
}
