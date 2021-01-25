import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'details', loadChildren: () => import('./movie-detail/movie-detail.module').then(m => m.MovieDetailModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
