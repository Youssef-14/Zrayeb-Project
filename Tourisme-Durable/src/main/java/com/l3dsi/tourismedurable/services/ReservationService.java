package com.l3dsi.tourismedurable.services;

import com.l3dsi.tourismedurable.models.Reservation;
import com.l3dsi.tourismedurable.repositories.ReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReservationService {
    private final ReservationRepository reservationRepository;

    public Iterable<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    public Optional<Reservation> getReservationByUserId(Integer id) {
        return reservationRepository.findByUserId(id);
    }

    public Reservation addReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public void deleteReservation(Integer id) {
        reservationRepository.deleteById(id);
    }

    public Reservation updateReservation(Integer id, Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public Reservation getReservationById(Integer id) {
        return reservationRepository.findById(id).get();
    }
}
