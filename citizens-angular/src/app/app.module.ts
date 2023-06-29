import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservationListComponent,
    CreateReservationComponent,
    UpdateReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
