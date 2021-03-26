import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  destinationsInCart = []

  constructor() { }

  // function to grab the products which will be then added to the cart 
  getDestination() {
    return this.destinationsInCart;
  }

  // function to add products to cart
  addToCart(destination) {
    this.destinationsInCart.push(destination);
  }

}
