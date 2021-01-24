import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  // Get items object from parent component, in our case, Person[], Movie[], or Planet[]
  @Input() items: Object[];

  constructor() { }
}