import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

import { ItemDetailComponent } from './item-detail.component';
import { ItemListComponent } from './item-list.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ItemDetailComponent, ItemListComponent, NgClass],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemImageUrl = '../assets/phone.svg';
  isUnchanged = true;
  classes = 'special';
  parentItem = 'lamp';

  currentItems = [{
    id: 21,
    name: 'phone'
  }];

  interpolationTitle = 'Interpolation';
  propertyTitle = 'Property binding';

  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/