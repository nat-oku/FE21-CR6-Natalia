import { Component, OnInit } from '@angular/core';
import { destinations } from '../destinations';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {

  destinations = destinations;
  destination: any;

  constructor(public shoppingCartService: ShoppingCartService) { }

  addToCart(destination) {
    this.shoppingCartService.addToCart(destination);
    // add function to show the number of items in the navbar cart
  }
  ngOnInit(): void {
  }

}
