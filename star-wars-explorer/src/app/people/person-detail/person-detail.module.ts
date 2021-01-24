import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { PersonDetailComponent } from './person-detail.component';
import { PersonDetailRoutingModule } from './person-detail-routing.module';

@NgModule({
  declarations: [
    PersonDetailComponent
  ],
  imports: [
    CommonModule,
    PersonDetailRoutingModule,
    MatCardModule,
    MatListModule
  ]
})
export class PersonDetailModule { }