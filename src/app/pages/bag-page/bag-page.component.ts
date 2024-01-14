import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/shopping-cart.service';

@Component({
  selector: 'app-bag-page',
  templateUrl: './bag-page.component.html',
  styleUrls: ['./bag-page.component.scss']
})
export class BagPageComponent {
  items : any[] = [];

  constructor(
    private shoppingCart : ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.items = this.shoppingCart.getItem();
    console.log(this.items)
  }

}
