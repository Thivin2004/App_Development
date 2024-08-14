// package com.example.demo.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.model.Login;
// import com.example.demo.service.LoginService;

// @RestController
// @RequestMapping("/api/Logins")
// public class LoginController {
//     @Autowired
//     LoginService ls;

//     @PostMapping("/create")
//     public ResponseEntity<Login> addData(@RequestBody Login l) {
//         Login obj = ls.create(l);
//         return new ResponseEntity<>(obj, HttpStatus.CREATED);
//     }

//     @GetMapping("/get/getall")
//     public ResponseEntity<List<Login>> getAll() {
//         try {
//             List<Login> obj = ls.getAll();
//             return new ResponseEntity<>(obj, HttpStatus.OK);
//         } catch (Exception e) {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @GetMapping("/getby/{userId}")
//     public ResponseEntity<Login> getById(@PathVariable("userId") int userId) {
//         Login login = ls.getById(userId);
//         if (login != null) {
//             return new ResponseEntity<>(login, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @PutMapping("/update/{userId}")
//     public ResponseEntity<Login> update(@PathVariable("userId") int userId, @RequestBody Login l) {
//         if (ls.updateDetails(userId, l)) {
//             return new ResponseEntity<>(l, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @DeleteMapping("/del/{userId}")
//     public ResponseEntity<Void> delete(@PathVariable("userId") int userId) {
//         if (ls.deleteEmployee(userId)) {
//             return new ResponseEntity<>(HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

// }

package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Login;
import com.example.demo.service.LoginService;

@RestController
@RequestMapping("/api/Logins")
public class LoginController {
    @Autowired
    LoginService ls;

    @PostMapping("/create")
    public ResponseEntity<?> addData(@RequestBody Login l) {
        try {
            // Validate email format
            if (!isValidEmail(l.getEmail())) {
                return new ResponseEntity<>("Invalid email format", HttpStatus.BAD_REQUEST);
            }

            // Check if email already exists
            if (ls.emailExists(l.getEmail())) {
                return new ResponseEntity<>("Email already exists", HttpStatus.CONFLICT);
            }

            // Validate password
            if (!isValidPassword(l.getPassword())) {
                return new ResponseEntity<>("Invalid password. It should be at least 8 characters long.",
                        HttpStatus.BAD_REQUEST);
            }

            // Create new user
            Login obj = ls.create(l);
            return new ResponseEntity<>(obj, HttpStatus.CREATED);
        } catch (Exception e) {
            // Log the exception and return a generic error message
            e.printStackTrace();
            return new ResponseEntity<>("An error occurred while processing your request.",
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get/getall")
    public ResponseEntity<List<Login>> getAll() {
        try {
            List<Login> obj = ls.getAll();
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getby/{userId}")
    public ResponseEntity<Login> getById(@PathVariable("userId") int userId) {
        Login login = ls.getById(userId);
        if (login != null) {
            return new ResponseEntity<>(login, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{userId}")
    public ResponseEntity<Login> update(@PathVariable("userId") int userId, @RequestBody Login l) {
        if (ls.updateDetails(userId, l)) {
            return new ResponseEntity<>(l, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/del/{userId}")
    public ResponseEntity<Void> delete(@PathVariable("userId") int userId) {
        if (ls.deleteEmployee(userId)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    private boolean isValidEmail(String email) {
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        return email.matches(emailRegex);
    }

    private boolean isValidPassword(String password) {
        return password.length() >= 8; // Example: password must be at least 8 characters
    }
}
