import { Component } from '@angular/core';
import { Product } from './Product';
import { CartServiceService } from '../cart-service.service';
import { ProductStockService } from '../product-stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrl: './components-list.component.scss'
})
export class ComponentsListComponent {
  constructor(private cartService: CartServiceService, private stockService: ProductStockService) { }

  products$: Observable<Product[]> = new Observable;

  ngOnInit(): void {
    this.stockService.getAll();
    this.products$ = this.stockService.stock.asObservable();
  }

  addToCart(product: Product) {
    if (product.quantity > 0) {      
      if (product.stock < product.quantity) {
        product.quantity = product.stock;
      }
      this.cartService.addToCart(product);
      product.stock -= product.quantity;
      product.quantity = 0;
    }
  }
}
