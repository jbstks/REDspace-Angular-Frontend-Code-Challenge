import { Component, OnInit } from '@angular/core';

import { SwapiService } from '../swapi.service';
import { Movie } from './movie';

@Component({
  selector: 'app-movies',
  template: '<app-item-list [items]="movies"></app-item-list>',
  styleUrls: ['./movies.component.scss'],
  providers: [SwapiService]
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.swapiService.getAllMovies()
    .subscribe(
      (data: any) => {
        this.movies = data.results;
      }
    )
  }
}
