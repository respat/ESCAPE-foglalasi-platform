import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './reservations/reservations.component';
import { HomeComponent } from './home/home.component';
import { ReservationformComponent } from './reservationform/reservationform.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'foglalasok', component: ReservationsComponent },
  { path: 'ujfoglalas', component: ReservationformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
