import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { ReservationformModule } from './reservationform/reservationform.module';
import { FoglalasService } from './foglalas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ReservationsComponent,
    HomeComponent,
    FilterComponent,
    CardComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReservationformModule,
    FormsModule,
  ],
  providers: [FoglalasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
