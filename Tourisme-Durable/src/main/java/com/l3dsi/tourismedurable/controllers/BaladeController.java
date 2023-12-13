package com.l3dsi.tourismedurable.controllers;

import com.l3dsi.tourismedurable.models.Balade;
import com.l3dsi.tourismedurable.services.BaladeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/activities")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor

public class BaladeController {

    private final BaladeService baladeService;
    @CrossOrigin(origins = "*")
    @GetMapping("/all")
    public ResponseEntity<?> getAllBalades() {
        Iterable<Balade> balades = baladeService.getAllBalades();
        return ResponseEntity.ok(balades);
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/find/{id}")
    public ResponseEntity<?> getBaladeById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(baladeService.getBaladeById(id));
    }
    @CrossOrigin(origins = "*")
    @PostMapping("/add")
    public ResponseEntity<?> addBalade(@RequestBody Balade balade) {
        return ResponseEntity.ok(baladeService.addBalade(balade));
    }
    @CrossOrigin(origins = "*")
    @PutMapping("/update")
    public ResponseEntity<?> updateBalade(@RequestBody Balade balade) {
        return ResponseEntity.ok(baladeService.updateBalade(balade.getId(), balade));
    }
    @CrossOrigin(origins = "*")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBalade(@PathVariable("id") Integer id) {
        baladeService.deleteBalade(id);
        return ResponseEntity.ok("deleted");
    }
}
