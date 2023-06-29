import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

  id!: number;
  reservation!: Reservation;

  constructor(private reservationService: ReservationService,
    private route: ActivatedRoute,
    private router: Router) {}


  ngOnInit(): void {
    this.reservation = new Reservation();
    this.id = this.route.snapshot.params['id'];
    this.reservationService.getReservationById(this.id).subscribe(data => {
      console.log("here we are, " + data);
      this.reservation = data;
    }, error => console.log(error));
  }

  updateReservation() {
    this.reservationService.updateReservation(this.id, this.reservation).subscribe(data => {
      this.goToReservationList();
    }, error => console.log(error));
  }


  onSubmit(){
    this.updateReservation();
  }

  goToReservationList(){
    this.router.navigate(['/reservations']);
  }

}
