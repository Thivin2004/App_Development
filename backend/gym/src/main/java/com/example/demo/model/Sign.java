package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
// import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Sign {
    @Id
    @GeneratedValue
    int userId;
    String fName,lName,emailId,password;
    public Sign()
    {
        
    }
    public Sign(int userId, String fName, String lName, String emailId, String password) {
        this.userId = userId;
        this.fName = fName;
        this.lName = lName;
        this.emailId = emailId;
        this.password = password;
    }
    public int getUserId() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    public String getfName() {
        return fName;
    }
    public void setfName(String fName) {
        this.fName = fName;
    }
    public String getlName() {
        return lName;
    }
    public void setlName(String lName) {
        this.lName = lName;
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
   
    @OneToOne(cascade = CascadeType.ALL)
    @JsonBackReference
    Login login;
    
}
