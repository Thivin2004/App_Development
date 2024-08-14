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

// import com.example.demo.model.AdminProfile;
// import com.example.demo.service.AdminProfileService;

// @RestController
// @RequestMapping("/api/admins")
// public class AdminProfileController {

//     @Autowired
//     private AdminProfileService adminProfileService;

//     @GetMapping("/admins")
//     public List<AdminProfile> getAllAdminProfiles() {
//         return adminProfileService.getAllAdminProfiles();
//     }

//     @GetMapping("/admin/{id}")
//     public ResponseEntity<AdminProfile> getAdminProfileById(@PathVariable String id) {
//         Optional<AdminProfile> adminProfile = adminProfileService.getAdminProfileById(id);
//         if (adminProfile.isPresent()) {
//             return ResponseEntity.ok(adminProfile.get());
//         } else {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @PostMapping("/details")
//     public AdminProfile createAdminProfile(@RequestBody AdminProfile adminProfile) {
//         return adminProfileService.createAdminProfile(adminProfile);
//     }

//     @PutMapping("/{id}")
//     public ResponseEntity<AdminProfile> updateAdminProfile(@PathVariable String id,
//             @RequestBody AdminProfile adminProfileDetails) {
//         AdminProfile updatedAdminProfile = adminProfileService.updateAdminProfile(id, adminProfileDetails);
//         return ResponseEntity.ok(updatedAdminProfile);
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteAdminProfile(@PathVariable String id) {
//         adminProfileService.deleteAdminProfile(id);
//         return ResponseEntity.noContent().build();
//     }
// }

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
