import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}

// The addToCart() method appends a product to an array of items.
// The getItems() method collects the items users add to the cart and returns each item with its associated quantity.
// The clearCart() method returns an empty array of items.


/**
 In the CartService class, define an “items” property to store the array of the current products in the cart. Following this, we will define methods to add items to the cart, return cart items, and clear the cart items:
 */


/**
 As you can see it is a class that will hold the functionality of your application, if we create a component it will come with html css and typescript files, but when we generate a service it will come with one typescript file and it have the spec.ts file for testing, Angular distinguishes components from services to increase modularity and reusability. By separating a component's view-related functionality from other kinds of processing, you can make your component classes lean and efficient.
 */