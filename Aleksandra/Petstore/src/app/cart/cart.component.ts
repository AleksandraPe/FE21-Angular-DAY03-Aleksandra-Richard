import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  
  }
}


/*1.step
To configure and use the component to use the cart service, we need to import the CartService from the cart.service.ts file. After this,doing the same steps as before we need to inject the CartService so that the cart component can use it.
*/

/*2.step
 Define the items property to store the products in the cart, and then set the items using the cart’s service's getItems() method. Recall that we defined this method when we generated the cart.service.ts.

 The resulting CartComponent class is as follows:
 */


 /*3
 We added the items in the ngOnInit() function, because it will be loaded every time we enter the component or we go to the cart component.
 */


 /*4
  Angular's FormBuilder service provides convenient methods for generating controls. As with the other services we’ve used, we need to import and inject the service before we can use it. Import the FormBuilder service from the @angular/forms package since we will need to use them inside the cart component
  */

/*5
Still in the CartComponent class, define the checkoutForm property to store the form model. To gather the user's name and address, we will set the checkoutForm property with a form model containing name and address fields, using the FormBuilder group() method. We will add this between the curly braces, {}, of the constructor.
*/

/*6
For the checkout process, users need to submit their name and address. When they submit their order, the form should reset and the cart should be cleared.

In the cart.component.ts, we will define an onSubmit() method to process the form. We will use the CartService clearCart() method to empty the cart items and reset the form after its submission. In a real-world app, this method would also submit the data to an external server. 
 */
