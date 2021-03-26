import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  destinationsInCart;
  constructor(public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    //insert getDestination() function from shopping-cart.service in order to grab products and display them in the cart
    this.destinationsInCart = this.shoppingCartService.getDestination();
  }

}
