package com.citizenscafe.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.citizenscafe.springboot.model.Reservation;

@Repository
public interface ReservationRepo extends JpaRepository<Reservation, Long>{

}
