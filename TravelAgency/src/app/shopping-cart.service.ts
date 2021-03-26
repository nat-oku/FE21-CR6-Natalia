import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  destinationsInCart = []
  cartTotal: number = 0; 
  
  constructor() { }

  // function to grab the products which will be then added to the cart 
  getDestination() {
    return this.destinationsInCart;
  }

  // function to add products to cart
  addToCart(destination) {
    this.destinationsInCart.push(destination);
    console.log(this.destinationsInCart)
  }

  // add function to determine items length, to show it in the navbar when product is clicked
  destinationsLength() {
    return this.destinationsInCart.length;
  }

  // add function to display totalSum() of all products selected
  getTotal() : number {
    let cartTotal = this.destinationsInCart.reduce((a, b) => a + b.price, 0);
    console.log(this.cartTotal)
    return cartTotal; // here it returns 0
  }
}