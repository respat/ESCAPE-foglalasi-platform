// reservations.component.ts

import { Component, OnInit } from '@angular/core';
import { FoglalasService } from '../foglalas.service';

@Component({
  selector: 'app-reservations',
  template: `
    <div class="flex w-full flex-col items-center py-20 min-h-screen">
      <h1>Foglalások</h1>
      <app-card
        *ngFor="let foglalas of foglalasok"
        [foglalas]="foglalas"
      ></app-card>
      <app-table [foglalasok]="foglalasok"></app-table>
    </div>
  `,
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  foglalasok: any[] = []; // Kezdeti érték adása

  constructor(private foglalasService: FoglalasService) {}

  ngOnInit(): void {
    this.getFoglalasok();
  }

  getFoglalasok(): void {
    this.foglalasService
      .getFoglalasok()
      .subscribe((foglalasok: any[]) => (this.foglalasok = foglalasok));
  }
}
