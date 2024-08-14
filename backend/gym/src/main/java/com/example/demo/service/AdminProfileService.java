// package com.example.demo.service;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import com.example.demo.model.AdminProfile;
// import com.example.demo.repository.AdminProfileRepository;

// @Service
// public class AdminProfileService {

//     @Autowired
//     private AdminProfileRepository adminProfileRepository;

//     public List<AdminProfile> getAllAdminProfiles() {
//         return adminProfileRepository.findAll();
//     }

//     public Optional<AdminProfile> getAdminProfileById(String id) {
//         return adminProfileRepository.findById(id);
//     }

//     public AdminProfile createAdminProfile(AdminProfile adminProfile) {
//         return adminProfileRepository.save(adminProfile);
//     }

//     public AdminProfile updateAdminProfile(String id, AdminProfile adminProfileDetails) {
//         AdminProfile adminProfile = adminProfileRepository.findById(id).orElseThrow(() -> new RuntimeException("AdminProfile not found"));

//         adminProfile.setName(adminProfileDetails.getName());
//         adminProfile.setEmail(adminProfileDetails.getEmail());
//         adminProfile.setPassword(adminProfileDetails.getPassword());
//         adminProfile.setRole(adminProfileDetails.getRole());

//         return adminProfileRepository.save(adminProfile);
//     }

//     public void deleteAdminProfile(String id) {
//         adminProfileRepository.deleteById(id);
//     }
// }

package com.example.demo.service;

import java.util.List;

import com.example.demo.model.AdminProfile;
import com.example.demo.repository.AdminProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminProfileService {
    @Autowired
    private AdminProfileRepository adminProfileRepository;

    public AdminProfile create(AdminProfile adminProfile) {
        return adminProfileRepository.save(adminProfile);
    }

    public List<AdminProfile> getAll() {
        return adminProfileRepository.findAll();
    }

    public AdminProfile getById(Long id) {
        return adminProfileRepository.findById(id).orElse(null);
    }

    public boolean updateDetails(Long id, AdminProfile adminProfile) {
        if (!adminProfileRepository.findById(id).isPresent()) {
            return false;
        }
        try {
            adminProfile.setId(id); // Ensure ID is set
            adminProfileRepository.save(adminProfile);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean delete(Long id) {
        if (!adminProfileRepository.findById(id).isPresent()) {
            return false;
        }
        adminProfileRepository.deleteById(id);
        return true;
    }
}
