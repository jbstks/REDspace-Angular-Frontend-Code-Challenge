import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetsComponent } from './planets.component';

const routes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: 'details', loadChildren: () => import('./planet-detail/planet-detail.module').then(m => m.PlanetDetailModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
