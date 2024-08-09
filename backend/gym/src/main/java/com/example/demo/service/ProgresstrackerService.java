package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Progresstracker;

@Service
public class ProgresstrackerService {

    @Autowired
    private com.example.demo.repository.ProgresstrackerRepository progresstrackerRepository;

    public Progresstracker saveProgress(Progresstracker progresstracker) {
        return progresstrackerRepository.save(progresstracker);
    }

    public List<Progresstracker> getAllProgressess() {
        return progresstrackerRepository.findAll();
    }

    public Progresstracker getProgressById(Long id) {
        return progresstrackerRepository.findById(id).orElse(null);
    }

    
    }