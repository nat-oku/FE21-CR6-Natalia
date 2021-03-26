import { Component, OnInit, DoCheck } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cartLength;

  constructor(public shoppingCartService: ShoppingCartService) { }


  ngOnInit(): void {
  }

  ngDoCheck() {
    this.cartLength = this.shoppingCartService.destinationsLength();
  }

}
