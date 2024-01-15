import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items : any[] = [];

  constructor() {
    this.loadItemsFromLocalStorage();
  }

  addItem(item : any): void {
    this.items.push(item);
    this.saveItemsToLocalStorage();
  }

  getItem(): any {
    return this.items;
  }

  removeCartItem(item : any) {
    this.items.map((a:any, index:any) => {
      if (item.id === a.id) {
        this.items.splice(index, 1);
      }
    });
    this.saveItemsToLocalStorage();
  }

  removeAllCartItem() {
    this.items = [];
    this.saveItemsToLocalStorage();
  }

  private saveItemsToLocalStorage() {
    localStorage.setItem('shoppingCartItems', JSON.stringify(this.items));
  }

  private loadItemsFromLocalStorage() {
    const storedItems = localStorage.getItem('shoppingCartItems');
    this.items = storedItems ? JSON.parse(storedItems) : [];
  }

}
