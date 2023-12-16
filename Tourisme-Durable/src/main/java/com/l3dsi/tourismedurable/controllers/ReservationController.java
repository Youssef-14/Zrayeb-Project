package com.l3dsi.tourismedurable.controllers;

import com.l3dsi.tourismedurable.models.Balade;
import com.l3dsi.tourismedurable.models.Reservation;
import com.l3dsi.tourismedurable.models.ReservationPDO;
import com.l3dsi.tourismedurable.repositories.ReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/v1/activities/reservations")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class ReservationController {
    private final ReservationRepository reservationRepository;

    @GetMapping("/all")
    public ResponseEntity<?> getAllReservations() {
        return ResponseEntity.ok("all");
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<?> getReservationById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok("reservation");
    }

    @GetMapping("/findbyuser/{id}")
    public ResponseEntity<?> getReservationByUserId(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(reservationRepository.findByUserId(id));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addReservation(@RequestBody ReservationPDO reservation) {
        /*RestTemplate restTemplate = new RestTemplate();
        // Check if user exists from another service with http request
        String verifyIdUrl = "http://localhost:8222/api/v1/auth/verifyid/" + reservation.getUserId();
        ResponseEntity<Void> userVerificationResponse = restTemplate.getForEntity(verifyIdUrl, Void.class);

        if (userVerificationResponse.getStatusCode() == HttpStatus.OK) {
            // User exists, proceed with saving the reservation
            return ResponseEntity.ok(reservationRepository.save(reservation));
        } else {
            // User does not exist, return an appropriate response
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found");
        }*/
        //convert ReservationPDO to Reservation
        Reservation reservation1 = new Reservation();
        reservation1.setBalade(reservation.getBalade());
        reservation1.setUserId(reservation.getUserId());
        return ResponseEntity.ok(reservationRepository.save(reservation1));
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateReservation(@RequestBody Reservation reservation) {
        return ResponseEntity.ok(reservationRepository.save(reservation));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteReservation(@PathVariable("id") Integer id) {
        reservationRepository.deleteById(id);
        return ResponseEntity.ok("deleted");
    }
}
