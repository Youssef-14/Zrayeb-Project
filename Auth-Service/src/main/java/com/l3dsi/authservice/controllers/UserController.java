package com.l3dsi.authservice.controllers;

import com.l3dsi.authservice.models.dto.ChangePasswordRequest;
import com.l3dsi.authservice.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers() {
        service.getAllUsers();
        return ResponseEntity.ok().build();
    }

    @PatchMapping
    public ResponseEntity<?> changePassword(
            @RequestBody ChangePasswordRequest request,
            Principal connectedUser
    ) {
        service.changePassword(request, connectedUser);
        return ResponseEntity.ok().build();
    }
}
