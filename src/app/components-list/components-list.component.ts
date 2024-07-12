import { Component } from '@angular/core';
import { Product } from './Product';
import { CartServiceService } from '../cart-service.service';
import { ProductStockService } from '../product-stock.service';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrl: './components-list.component.scss'
})
export class ComponentsListComponent {
  constructor(private cartService: CartServiceService, private stockService: ProductStockService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.stockService.getAll().subscribe(products => this.products = products);
  }

  increment(product: Product): void {
    if (product.quantity < product.stock) {
      product.quantity++;
    };
  }

  decrement(product: Product): void {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }
}
