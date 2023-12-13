package com.l3dsi.tourismedurable.controllers;

import com.l3dsi.tourismedurable.models.Balade;
import com.l3dsi.tourismedurable.services.BaladeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/activities")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor

public class BaladeController {

    private final BaladeService baladeService;
    @GetMapping("/all")
    public ResponseEntity<?> getAllBalades() {
        return ResponseEntity.ok(baladeService.getAllBalades());
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<?> getBaladeById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(baladeService.getBaladeById(id));
    }
    @PostMapping("/add")
    public ResponseEntity<?> addBalade(@RequestBody Balade balade) {
        return ResponseEntity.ok(baladeService.addBalade(balade));
    }
    @PutMapping("/update")
    public ResponseEntity<?> updateBalade(@RequestBody Balade balade) {
        return ResponseEntity.ok(baladeService.updateBalade(balade.getId(), balade));
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBalade(@PathVariable("id") Integer id) {
        baladeService.deleteBalade(id);
        return ResponseEntity.ok("deleted");
    }
}
