import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Person } from '../person';
import { SwapiService } from '../../swapi.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  person$: Observable<Person>;
  
  constructor( private route: ActivatedRoute, private swapiService: SwapiService ) { }

  ngOnInit(): void {
    this.person$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.swapiService.getPersonById(parseInt(params.get('id'))))
    );
    
  }

}
