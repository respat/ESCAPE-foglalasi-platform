import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FoglalasService } from '../foglalas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservationform',
  templateUrl: './reservationform.component.html',
  styleUrls: ['./reservationform.component.css'],
})
export class ReservationformComponent {
  foglalas: any = {};
  sliderValue: number = 2;
  error: any;

  constructor(
    private datePipe: DatePipe,
    private foglalasService: FoglalasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.foglalas.datum = this.getDate();
  }

  getDate(): string {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  }

  zipCode(event: Event) {
    const input = event.target as HTMLInputElement;
    const zipCode = input.value;

    if (zipCode.length !== 4 || isNaN(+zipCode)) {
      input.value = '';
      alert('Az irányítószámnak négyjegyűnek kell lennie!');
    }
  }

  onSubmit() {
    if (
      !this.foglalas.nev ||
      !this.foglalas.datum ||
      !this.foglalas.iranyitoszam ||
      !this.foglalas.cim
    ) {
      alert('Minden kötelező mezőt ki kell tölteni!');
      return;
    }
    this.foglalas.fo = this.sliderValue;
    this.foglalasService.createFoglalas(this.foglalas).subscribe(
      (response: any) => {
        console.log('Foglalás elküldve:', response);
        this.router.navigate(['/foglalasok']);
      },
      (error: any) => {
        console.error('Hiba a foglalás elküldésekor:', error);
        this.error = error;
        alert('Hiba a foglalás elküldése közben.');
      }
    );
  }
}
