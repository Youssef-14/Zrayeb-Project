package com.l3dsi.tourismedurable.repositories;

import com.l3dsi.tourismedurable.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
}
