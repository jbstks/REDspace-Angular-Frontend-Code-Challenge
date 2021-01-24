import { Component, OnInit } from '@angular/core';

import { Person } from '../people/person';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-people',
  template: '<app-item-list [items]="people"></app-item-list>',
  styleUrls: ['./people.component.scss'],
  providers: [SwapiService]
})
export class PeopleComponent implements OnInit {
  people: Person[] = [];

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.getAllPeople();
  }

  getAllPeople(): void {
    this.swapiService.getAllPeople()
    .subscribe(
      (data: any) => {
        this.people = data.results;
      }
    )
  }
}