

// package com.example.demo.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;
// import java.util.List;
// import com.example.demo.model.Payment;
// import com.example.demo.service.PaymentService;

// @RestController
// @RequestMapping("/payment")
// public class PaymentController {

//     @Autowired
//     PaymentService ps;

//     @PostMapping("/create")
//     public ResponseEntity<Payment> addData(@RequestBody Payment p) {
//         Payment obj = ps.create(p);
//         return new ResponseEntity<>(obj, HttpStatus.CREATED);
//     }

//     @GetMapping("/getall")
//     public ResponseEntity<List<Payment>> getAll() {
//         try {
//             List<Payment> obj = ps.getAll();
//             return new ResponseEntity<>(obj, HttpStatus.OK);
//         } catch (Exception e) {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @GetMapping("/get/{paymentId}")
//     public ResponseEntity<Payment> getById(@PathVariable("paymentId") int paymentId) {
//         Payment payment = ps.getById(paymentId);
//         if (payment != null) {
//             return new ResponseEntity<>(payment, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @PutMapping("/update/{paymentId}")
//     public ResponseEntity<Payment> update(@PathVariable("paymentId") int paymentId, @RequestBody Payment p) {
//         if (ps.updateDetails(paymentId, p)) {
//             return new ResponseEntity<>(p, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @DeleteMapping("/delete/{paymentId}")
//     public ResponseEntity<Void> delete(@PathVariable("paymentId") int paymentId) {
//         if (ps.deletePayment(paymentId)) {
//             return new ResponseEntity<>(HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @PutMapping("/complete/{paymentId}")
//     public ResponseEntity<Payment> completePayment(@PathVariable("paymentId") int paymentId) {
//         Payment payment = ps.getById(paymentId);
//         if (payment != null) {
//             payment.setPaymentStatus("Completed");
//             Payment updatedPayment = ps.updateDetails(paymentId, payment) ? payment : null;
//             if (updatedPayment != null) {
//                 return new ResponseEntity<>(updatedPayment, HttpStatus.OK);
//             } else {
//                 return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//             }
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }
// }
package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.demo.model.Payment;
import com.example.demo.service.PaymentService;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    PaymentService ps;

    @PostMapping("/create")
    public ResponseEntity<Payment> addData(@RequestBody Payment p) {
        Payment obj = ps.create(p);
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Payment>> getAll() {
        try {
            List<Payment> obj = ps.getAll();
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{paymentId}")
    public ResponseEntity<Payment> getById(@PathVariable("paymentId") int paymentId) {
        Payment payment = ps.getById(paymentId);
        if (payment != null) {
            return new ResponseEntity<>(payment, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{paymentId}")
    public ResponseEntity<Payment> update(@PathVariable("paymentId") int paymentId, @RequestBody Payment p) {
        if (ps.updateDetails(paymentId, p)) {
            return new ResponseEntity<>(p, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{paymentId}")
    public ResponseEntity<Void> delete(@PathVariable("paymentId") int paymentId) {
        if (ps.deletePayment(paymentId)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

