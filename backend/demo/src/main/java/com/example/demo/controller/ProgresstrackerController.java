package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Progresstracker;
import com.example.demo.service.ProgresstrackerService;

@RestController
@RequestMapping("/api/progresstracker")
public class ProgresstrackerController {

    @Autowired
    private ProgresstrackerService progresstrackerService;

    @PostMapping("/create")
    public Progresstracker submitProgress(@RequestBody Progresstracker progresstracker) {
        return progresstrackerService.saveProgress(progresstracker);
    }

    @GetMapping("/get/getall")
    public List<Progresstracker> getAllProgresses() {
        return progresstrackerService.getAllProgressess();
    }

    @GetMapping("/getby/{id}")
    public Progresstracker getProgressById(@PathVariable Long id) {
        return progresstrackerService.getProgressById(id);
    }
}