import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [... products];


  share(): void {
    window.alert("The product has been shared!!!");
  }

  onNotify(): void {
    window.alert("U'll be notified, when product goes on sale")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
