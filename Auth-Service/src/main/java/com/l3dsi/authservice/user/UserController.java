package com.l3dsi.authservice.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers() {
        Iterable<User> all = service.getAllUsers();
        System.out.println(all);
        return ResponseEntity.ok("all");
    }

    @GetMapping("/verifyid/{id}")
    public CompletableFuture<ResponseEntity<?>> getUserById(@PathVariable("id") Integer id) {
        CompletableFuture<User> userFuture = CompletableFuture.supplyAsync(() -> service.getUserById(id));

        if (userFuture.isCompletedExceptionally()) {
            return CompletableFuture.completedFuture(ResponseEntity.badRequest().build());
        }

        return userFuture.thenApply(user -> {
            System.out.println(user);
            return ResponseEntity.ok(user.toString());
        });
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
