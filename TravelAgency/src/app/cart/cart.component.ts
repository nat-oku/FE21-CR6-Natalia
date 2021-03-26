import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  destinationsInCart;
  cartTotal: number;
  discount: number;

  constructor(public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    //insert getDestination() function from shopping-cart.service in order to grab products and display them in the cart
    this.destinationsInCart = this.shoppingCartService.getDestination();
    this.cartTotal = this.shoppingCartService.getTotal();
    console.log(this.cartTotal); // here it returns the correct sum
  }
  
  getDiscount(discount) {
    if(this.cartTotal > 2000) {
      this.discount = this.cartTotal * 0.9;
      console.log(this.discount)
      return this.discount
    } else if(this.cartTotal > 5000) {
      this.discount = this.cartTotal * 0.8;
      console.log(this.discount)
      return this.discount;
    }
  }
}
