import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items : any[] = [];

  constructor() {}

  addItem(item : any): void {
    this.items.push(item);
  }

  getItem(): any {
    return this.items;
  }

}
