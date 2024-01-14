// reservationform.module.ts

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservationformComponent } from './reservationform.component';

@NgModule({
  declarations: [ReservationformComponent],
  imports: [CommonModule, FormsModule],
  exports: [ReservationformComponent],
  providers: [DatePipe],
})
export class ReservationformModule {}
