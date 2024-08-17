import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { ITEMS } from './mock-items';
import { Item } from './item';

@Component({
  standalone: true,
  selector: 'app-item-list',
  template: `
    <h4>Nested component's list of items:</h4>
    <ul>
      <li *ngFor="let item of listItems">{{item.id}} {{item.name}}</li>
    </ul>

    <h4>Pass an object from parent to nested component:</h4>
    <ul>
      <li *ngFor="let item of items">{{item.id}} {{item.name}}</li>
    </ul>
  `,
  imports: [NgFor],
})
export class ItemListComponent {
  listItems = ITEMS;
  @Input() items: Item[] = [];

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/