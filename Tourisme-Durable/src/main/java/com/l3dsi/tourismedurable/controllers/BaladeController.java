package com.l3dsi.tourismedurable.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/activities/balades")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class BaladeController {
    @GetMapping("/all")
    public ResponseEntity<?> getAllBalades() {
        return ResponseEntity.ok("all");
    }
}
