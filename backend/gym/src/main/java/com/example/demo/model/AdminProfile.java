// package com.example.demo.model;

// import jakarta.persistence.Entity;
// import jakarta.persistence.Id;

// @Entity
// public class AdminProfile {
    
//     @Id
//     private String adminId;
//     private String name;
//     private String email;
//     private String password;
//     private String role;

//     public AdminProfile() {}

//     public AdminProfile(String adminId, String name, String email, String password, String role) {
//         this.adminId = adminId;
//         this.name = name;
//         this.email = email;
//         this.password = password;
//         this.role = role;
//     }


//     public String getAdminId() {
//         return adminId;
//     }

//     public void setAdminId(String adminId) {
//         this.adminId = adminId;
//     }

//     public String getName() {
//         return name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getPassword() {
//         return password;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }

//     public String getRole() {
//         return role;
//     }

//     public void setRole(String role) {
//         this.role = role;
//     }
// }


package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AdminProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String adminName;
    private String adminEmail;
    private String role;

    // Constructors, Getters, and Setters
    public AdminProfile() {}

    public AdminProfile(Long id, String adminName, String adminEmail, String role) {
        this.id = id;
        this.adminName = adminName;
        this.adminEmail = adminEmail;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getAdminEmail() {
        return adminEmail;
    }

    public void setAdminEmail(String adminEmail) {
        this.adminEmail = adminEmail;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
