import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation'
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations?: Reservation[];

  constructor(private reservationService: ReservationService,
    private router: Router) {}

  ngOnInit(): void {
    this.getReservations();
  }


  private getReservations(){
    this.reservationService.getReservationsList().subscribe(data => {
      this.reservations = data;
      console.log(data);
    });
  }

  updateReservation(id: number){
    this.router.navigate(['update-reservation', id]);
  }


  deleteReservation(id: number){
    this.reservationService.deleteReservation(id).subscribe(data => {
      this.getReservations();
      console.log(data);
    })
  }
}
