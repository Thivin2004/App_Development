package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.DietPlan;
import com.example.demo.repository.DietPlanRepository;

import java.util.List;

@Service
public class DietPlanService {

    @Autowired
    private DietPlanRepository dietPlanRepository;

    public DietPlan create(DietPlan dietPlan) {
        return dietPlanRepository.save(dietPlan);
    }

    public List<DietPlan> getAll() {
        return dietPlanRepository.findAll();
    }

    public DietPlan getById(Long id) {
        return dietPlanRepository.findById(id).orElse(null);
    }

    public boolean updateDetails(Long id, DietPlan dietPlan) {
        if (dietPlanRepository.existsById(id)) {
            dietPlan.setId(id);
            dietPlanRepository.save(dietPlan);
            return true;
        }
        return false;
    }

    public boolean deleteDietPlan(Long id) {
        if (dietPlanRepository.existsById(id)) {
            dietPlanRepository.deleteById(id);
            return true;
        }
        return false;
    }
}