import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';

import { ItemListComponent } from './item-list.component';
import { ItemListRoutingModule } from './item-list-routing.module';

@NgModule({
    declarations: [ItemListComponent],
    imports: [
      CommonModule,
      ItemListRoutingModule,
      MatListModule
    ],
    exports: [ItemListComponent]
})
export class ItemListModule { }