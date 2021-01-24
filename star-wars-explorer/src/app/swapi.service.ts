import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { Person } from './people/person';
import { Planet } from './planets/planet';
import { Movie } from './movies/movie';

const SWAPI_URL = 'https://swapi.dev/api';

/**
 * SWAPI Service
 * 
 * Functions that call the Star Wars API for people, movies, and planets.
 * 
 * TODO: For larger datasets, such as people, get the next page of data when
 *       scrolling past the first 10. This API has 10 results per page.
 * 
 * NOTE
 * Could not complete above TODO due to time restraints and other obligations.
 * Ideally wanted to make the next page call when scrolling past the first
 * data set. Could have implemented a while loop that scraped all pages of
 * data, but that would drastically increase loading time.  In the end, decided
 * to prioritize everything else functioning.
 */
@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private http: HttpClient
  ) { }

  /* GET: /people
   * Currently only gets the first page of data from the API.
   * See above note
   */
   public getAllPeople(): Observable<Person[]> {
    const url = `${SWAPI_URL}/people/`;
    return this.http.get(url)
    .pipe(
      map((data: Person[]) => {
        return data;
      })
    );
  }

  // GET: /people/:id
  public getPersonById(personId: number): Observable<Person> {
    const url = `${SWAPI_URL}/people/${personId}/`;
    return this.http.get<Person>(url);
  }

  /* GET: /planets
   * Currently only gets the first page of data from the API.
   * See above note
   */
  public getAllPlanets() {
    const url = `${SWAPI_URL}/planets/`;
    return this.http.get(url)
    .pipe(
      map((data: Planet[]) => {
        return data;
      })
    );
  }

  // GET: /planets/:id
  public getPlanetById(planetId: number) {
    const url = `${SWAPI_URL}/planets/${planetId}/`;
    return this.http.get<Planet>(url);
  }

  /* GET: /films
  * Currently only gets the first page of data from the API.
  * See above note
  */
  public getAllMovies() {
    const url = `${SWAPI_URL}/films/`;
    return this.http.get(url)
    .pipe(
      map((data: Movie[]) => {
        return data;
      })
    );
  }

  // GET: /films/:id
  public getMovieById(movieId: number) {
    const url = `${SWAPI_URL}/films/${movieId}/`;
    return this.http.get<Movie>(url);
  }
}