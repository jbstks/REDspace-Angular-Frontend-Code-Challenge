import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { PlanetDetailComponent } from './planet-detail.component';
import { PlanetDetailRoutingModule } from './planet-detail-routing.module';

@NgModule({
  declarations: [
    PlanetDetailComponent
  ],
  imports: [
    CommonModule,
    PlanetDetailRoutingModule,
    MatCardModule,
    MatListModule
  ]
})
export class PlanetDetailModule { }