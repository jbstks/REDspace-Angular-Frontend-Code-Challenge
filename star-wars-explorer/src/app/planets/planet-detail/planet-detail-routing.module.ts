import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetDetailComponent } from './planet-detail.component';

const routes: Routes = [
  { path: ':id', component: PlanetDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetDetailRoutingModule { }
