package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.ContactModel;

@Service
public class ContactService {

    @Autowired
    private com.example.demo.repository.ContactRepository contactRepository;

    public ContactModel saveMessage(ContactModel contactModel) {
        return contactRepository.save(contactModel);
    }

    public List<ContactModel> getAllMessages() {
        return contactRepository.findAll();
    }

    public ContactModel getMessageById(Long id) {
        return contactRepository.findById(id).orElse(null);
    }
}