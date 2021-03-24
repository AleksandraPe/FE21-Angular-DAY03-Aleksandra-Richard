import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // package that have some methods and properties that will help us to grab the value from the URL and use it with some build-in methods
import { CartService } from '../cart.service';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

    addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
    });
  }

}







/**1.step
 Using route information
The product details component handles the display of each product. The Angular Router displays components based on the browser's URL and your defined routes. This section shows you how to use the Angular Router to combine the products data and route information to display the specific details for each product.

Import ActivatedRoute from the @angular/router package, and the products array from ../products. This package will allow us to take the value from the url.
 */


/**2.step
 ActivatedRoute : provides access to information about a route associated with a component that is loaded in an outlet. It is used to traverse the RouterState tree and extract information from nodes. The ActivatedRoute is specific to each routed component that the Angular Router loads. It contains information about the route, its parameters, and additional data associated with the route.

By injecting the ActivatedRoute, we are configuring the component to use a service.

ngOnInit() is a livecycle hook in Angular and it is a function that will load every time your component is loaded.

In ngOnInit(),the route parameters correspond to the path variables we define in the route. The URL that matches the route provides the productId. Angular uses the productId to display the details for each unique product.
 */


/**3.step
 Import the cart service to the product-details.component.ts and Inject the cart service by adding it to the constructor(), define the addToCart() method. This adds the current product to the cart.

The addToCart() method does the following:

Receives the current product.
Uses the cart service's addToCart() method to add the product to the cart.
Displays a message that we’ve added a product to the cart.
 */


/**
 addToCart() function will accept one parameter and it will show you a message that your product has been added to the cart, then we will use the function addToCart from the CartService to push that element to the items array.
 */
