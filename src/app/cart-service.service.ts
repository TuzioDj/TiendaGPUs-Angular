import { Injectable } from '@angular/core';
import { Product } from './components-list/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  
  private $cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  
  constructor() { }
  
  addToCart(product: Product) {
    let item: Product | undefined = this.$cartList.find((v1) => v1.name == product.name);
    
    if (!item) {
      this.$cartList.push({ ... product });
    } else {
      item.quantity += product.quantity;
    }
    this.cartList.next(this.$cartList);
  }

  removeFromCart(product: Product) {
    this.$cartList = this.$cartList.filter((v1) => v1.name !== product.name);
    this.cartList.next(this.$cartList);
  }
  
}
