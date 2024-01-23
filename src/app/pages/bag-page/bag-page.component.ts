import { Component, ElementRef } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/shopping-cart.service';

@Component({
  selector: 'app-bag-page',
  templateUrl: './bag-page.component.html',
  styleUrls: ['./bag-page.component.scss']
})
export class BagPageComponent {
  items : any[] = [];

  constructor(
    private shoppingCart : ShoppingCartService,
    private el : ElementRef
  ) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.items = this.shoppingCart.getItem();
  }

  removeItem(item : any):void {
    this.shoppingCart.removeCartItem(item);
  }

  promoCodeField : boolean = false;
  openPromoCodeField() {
    const arrow = this.el.nativeElement.querySelector('.promo-arrow');

    this.promoCodeField = !this.promoCodeField;
    if(this.promoCodeField) {
      arrow.style.transform = 'rotate(-90deg)';
    } else {
      arrow.style.transform = 'rotate(90deg)';
    };
    
  }

}
