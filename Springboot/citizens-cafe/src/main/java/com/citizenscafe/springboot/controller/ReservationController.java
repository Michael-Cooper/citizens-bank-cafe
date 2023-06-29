package com.citizenscafe.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.citizenscafe.springboot.exception.ResourceNotFoundException;
import com.citizenscafe.springboot.model.Reservation;
import com.citizenscafe.springboot.repository.ReservationRepo;

@CrossOrigin("*") 
@RestController
@RequestMapping("/api/v1/")
public class ReservationController {

	@Autowired
	private ReservationRepo reservationRepo;
	
	// get all reservations
	@GetMapping("/reservations")
	public List<Reservation> getReservations()
	{
		return reservationRepo.findAll();
	}
	
	// create reservation
	@PostMapping("/reservations")
	public Reservation createReservation(@RequestBody Reservation reservation)
	{
		return reservationRepo.save(reservation);
	}
	
	
	// get reservations by id
		@GetMapping("/reservations/{id}")
		public ResponseEntity<Reservation> getReservationById(@PathVariable Long id) {
			Reservation reservation = reservationRepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Reservation does not exist with id :" + id));
			return ResponseEntity.ok(reservation);
		}
	
	
	// update reservation
	@PutMapping("/reservations/{id}")
	public ResponseEntity<Reservation> updateReservation(@PathVariable Long id, @RequestBody Reservation reservationDetails)
	{
		Reservation reservation = reservationRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Reservation does not exist with id :" + id));
		
		reservation.setName(reservationDetails.getName());
		reservation.setPartySize(reservationDetails.getPartySize());
		reservation.setPhoneNumber(reservationDetails.getPhoneNumber());
		reservation.setTime(reservationDetails.getTime());
		
		Reservation updatedReservation = reservationRepo.save(reservation);
		return ResponseEntity.ok(updatedReservation);
	}
	
	
	// delete reservation
	@DeleteMapping("/reservations/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteReservation(@PathVariable Long id){
		Reservation reservation = reservationRepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Reservation does not exist with id :" + id));
		
		reservationRepo.delete(reservation);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
