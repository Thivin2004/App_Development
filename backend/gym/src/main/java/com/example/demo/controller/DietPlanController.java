package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.DietPlan;
import com.example.demo.service.DietPlanService;

import java.util.List;

@RestController
@RequestMapping("/api/dietplans")
public class DietPlanController {

    @Autowired
    private DietPlanService dietPlanService;

    @PostMapping("/diet/add")
    public ResponseEntity<DietPlan> addDietPlan(@RequestBody DietPlan dietPlan) {
        DietPlan createdDietPlan = dietPlanService.create(dietPlan);
        return new ResponseEntity<>(createdDietPlan, HttpStatus.CREATED);
    }

    @GetMapping("/diet/getall")
    public ResponseEntity<List<DietPlan>> getAllDietPlans() {
        List<DietPlan> dietPlans = dietPlanService.getAll();
        return new ResponseEntity<>(dietPlans, HttpStatus.OK);
    }

    @GetMapping("/getby/{id}")
    public ResponseEntity<DietPlan> getDietPlanById(@PathVariable Long id) {
        DietPlan dietPlan = dietPlanService.getById(id);
        if (dietPlan != null) {
            return new ResponseEntity<>(dietPlan, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<DietPlan> updateDietPlan(@PathVariable Long id, @RequestBody DietPlan dietPlan) {
        if (dietPlanService.updateDetails(id, dietPlan)) {
            return new ResponseEntity<>(dietPlan, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteDietPlan(@PathVariable Long id) {
        if (dietPlanService.deleteDietPlan(id)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}