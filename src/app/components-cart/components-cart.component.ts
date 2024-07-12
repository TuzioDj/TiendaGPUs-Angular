import { Component } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Product } from '../components-list/Product';
import { Observable, observable } from 'rxjs';
import { ProductStockService } from '../product-stock.service';

@Component({
  selector: 'app-components-cart',
  templateUrl: './components-cart.component.html',
  styleUrl: './components-cart.component.scss'
})
export class ComponentsCartComponent {
  cartList$: Observable<Product[]> = new Observable();


  constructor(private cartService: CartServiceService, private stockService: ProductStockService) {
    this.cartList$ = cartService.cartList.asObservable();
  }

  deleteItem(product: Product) {
    this.stockService.removeFromCart(product);
    this.cartService.removeFromCart(product);
    product.stock += product.quantity;
    product.quantity = 0;
  }
}
