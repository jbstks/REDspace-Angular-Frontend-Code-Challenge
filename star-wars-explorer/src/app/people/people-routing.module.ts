import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './people.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'details', loadChildren: () => import('./person-detail/person-detail.module').then(m => m.PersonDetailModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
