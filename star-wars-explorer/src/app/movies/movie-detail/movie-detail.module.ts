import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { MovieDetailComponent } from './movie-detail.component';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';

@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    MatCardModule,
    MatListModule
  ]
})
export class MovieDetailModule { }