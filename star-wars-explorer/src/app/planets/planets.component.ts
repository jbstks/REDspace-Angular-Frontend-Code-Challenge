import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

import { Planet } from './planet';

@Component({
  selector: 'app-planets',
  template: '<app-item-list [items]="planets"></app-item-list>',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.getAllPlanets();
  }

  getAllPlanets(): void {
    this.swapiService.getAllPlanets()
    .subscribe(
      (data: any) => {
        this.planets = data.results;
      }
    )
  }

}
