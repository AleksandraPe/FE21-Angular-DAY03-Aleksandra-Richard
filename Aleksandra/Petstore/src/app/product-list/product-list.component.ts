import { Component, OnInit } from '@angular/core';
//display the products in the product-list component. To do this, first we need to import the file:
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }

}
