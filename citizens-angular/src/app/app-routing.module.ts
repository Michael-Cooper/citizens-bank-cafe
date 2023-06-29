import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';

const routes: Routes = [
  {path: 'reservations', component: ReservationListComponent},
  {path: 'create-reservation', component: CreateReservationComponent},
  {path: '', redirectTo: 'reservations', pathMatch: 'full'},
  {path: 'update-reservation/:id', component: UpdateReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
