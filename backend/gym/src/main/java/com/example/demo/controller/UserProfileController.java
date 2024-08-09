// package com.example.demo.controller;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.model.UserProfile;
// import com.example.demo.service.UserProfileService;

// @RestController
// @RequestMapping("/api/users")
// public class UserProfileController {

//     @Autowired
//     private UserProfileService userProfileService;

//     @GetMapping("/get/getall")
//     public List<UserProfile> getAllUserProfiles() {
//         return userProfileService.getAllUserProfiles();
//     }

//     @GetMapping("/users/{id}")
//     public ResponseEntity<UserProfile> getUserProfileById(@PathVariable String id) {
//         Optional<UserProfile> userProfile = userProfileService.getUserProfileById(id);
//         if (userProfile.isPresent()) {
//             return ResponseEntity.ok(userProfile.get());
//         } else {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @PostMapping("/create/profiles")
//     public UserProfile createUserProfile(@RequestBody UserProfile userProfile) {
//         return userProfileService.createUserProfile(userProfile);
//     }

//     @PutMapping("/update/{id}")
//     public ResponseEntity<UserProfile> updateUserProfile(@PathVariable String id, @RequestBody UserProfile userProfileDetails) {
//         UserProfile updatedUserProfile = userProfileService.updateUserProfile(id, userProfileDetails);
//         return ResponseEntity.ok(updatedUserProfile);
//     }

//     @DeleteMapping("/del/{id}")
//     public ResponseEntity<Void> deleteUserProfile(@PathVariable String id) {
//         userProfileService.deleteUserProfile(id);
//         return ResponseEntity.noContent().build();
//     }
// }


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
