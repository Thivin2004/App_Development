package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.example.demo.model.Payment;
import com.example.demo.repository.PaymentRepo;

@Service
public class PaymentService {
    @Autowired
    PaymentRepo pr;

    public Payment create(Payment p) {
        return pr.save(p);
    }

    public List<Payment> getAll() {
        return pr.findAll();
    }

    public Payment getById(int paymentId) {
        return pr.findById(paymentId).orElse(null);
    }

    public boolean updateDetails(int paymentId, Payment p) {
        if (!pr.findById(paymentId).isPresent()) {
            return false;
        }
        try {
            pr.save(p);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean deletePayment(int paymentId) {
        if (!pr.findById(paymentId).isPresent()) {
            return false;
        }
        pr.deleteById(paymentId);
        return true;
    }
}
