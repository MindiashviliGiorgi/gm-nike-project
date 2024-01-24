import { Component, ElementRef } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/shopping-cart.service';

@Component({
  selector: 'app-bag-page',
  templateUrl: './bag-page.component.html',
  styleUrls: ['./bag-page.component.scss']
})
export class BagPageComponent {
  items : any[] = [];
  promoCodeField : boolean = false;
  subtotalPrice : number | undefined;

  constructor(
    private shoppingCart : ShoppingCartService,
    private el : ElementRef
  ) {}

  ngOnInit(): void {
    this.getItems();
    this.calculateSubtotal();
  }

  getItems() {
    this.items = this.shoppingCart.getItem();
  }

  removeItem(item : any):void {
    this.shoppingCart.removeCartItem(item);
  }

  openPromoCodeField() {
    const promoCodeMainDiv = this.el.nativeElement.querySelector('.promo-code');
    const arrow = this.el.nativeElement.querySelector('.promo-arrow');
    const inputField = this.el.nativeElement.querySelector('.promo-code-input');

    this.promoCodeField = !this.promoCodeField;
    if(this.promoCodeField) {
      promoCodeMainDiv.style.height = 'auto';
      arrow.style.transform = 'rotate(-90deg)';
      inputField.style.height = '38px';
      inputField.style.opacity = '1';
      inputField.style.zIndex = '1';
    } else {
      promoCodeMainDiv.style.height = 'auto';
      arrow.style.transform = 'rotate(90deg)';
      inputField.style.height = '0px';
      inputField.style.opacity = '0';
      inputField.style.zIndex = '-5';
    };
  }

  calculateSubtotal(): void {
    this.subtotalPrice = this.shoppingCart.calculateSubtotal(this.items);
  }

}
