import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { ItemListModule } from '../components/item-list/item-list.module';

@NgModule({
  declarations: [PlanetsComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    ItemListModule
  ]
})
export class PlanetsModule { }
