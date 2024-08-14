// package com.example.demo.service;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.model.UserProfile;
// import com.example.demo.repository.UserProfileRepository;

// @Service
// public class UserProfileService {

//     @Autowired
//     private UserProfileRepository userProfileRepository;

//     public List<UserProfile> getAllUserProfiles() {
//         return userProfileRepository.findAll();
//     }

//     public Optional<UserProfile> getUserProfileById(String id) {
//         return userProfileRepository.findById(id);
//     }

//     public UserProfile createUserProfile(UserProfile userProfile) {
//         return userProfileRepository.save(userProfile);
//     }

//     public UserProfile updateUserProfile(String id, UserProfile userProfileDetails) {
//         UserProfile userProfile = userProfileRepository.findById(id)
//                 .orElseThrow(() -> new RuntimeException("UserProfile not found"));

//         userProfile.setName(userProfileDetails.getName());
//         userProfile.setEmail(userProfileDetails.getEmail());
//         userProfile.setPassword(userProfileDetails.getPassword());
//         userProfile.setRole(userProfileDetails.getRole());

//         return userProfileRepository.save(userProfile);
//     }

//     public void deleteUserProfile(String id) {
//         userProfileRepository.deleteById(id);
//     }
// }


package com.example.demo.service;

import java.util.List;

import com.example.demo.model.UserProfile;
import com.example.demo.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfileService {
    @Autowired
    private UserProfileRepository userProfileRepository;

    public UserProfile create(UserProfile userProfile) {
        return userProfileRepository.save(userProfile);
    }

    public List<UserProfile> getAll() {
        return userProfileRepository.findAll();
    }

    public UserProfile getById(Long id) {
        return userProfileRepository.findById(id).orElse(null);
    }

    public boolean updateDetails(Long id, UserProfile userProfile) {
        if (!userProfileRepository.findById(id).isPresent()) {
            return false;
        }
        try {
            userProfile.setId(id);  // Ensure ID is set
            userProfileRepository.save(userProfile);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean delete(Long id) {
        if (!userProfileRepository.findById(id).isPresent()) {
            return false;
        }
        userProfileRepository.deleteById(id);
        return true;
    }
}
