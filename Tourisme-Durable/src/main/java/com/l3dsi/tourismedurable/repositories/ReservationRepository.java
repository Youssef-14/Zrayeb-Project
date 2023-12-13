package com.l3dsi.tourismedurable.repositories;

import com.l3dsi.tourismedurable.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    Optional<Reservation> findByUserId(Integer id);
}
