import { Component } from '@angular/core';
import { Product } from './Product';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrl: './components-list.component.scss'
})
export class ComponentsListComponent {
  constructor(private cartService: CartServiceService) { }

  products: Product[] = [
    {
      name: 'Producto',
      type: 'Tipo',
      price: 50,
      stock: 5,
      quantity: 0,
    },
    {
      name: 'Producto2',
      type: 'Tipo2',
      price: 150,
      stock: 0,
      quantity: 0,
    },
    {
      name: 'Producto3',
      type: 'Tipo3',
      price: 500,
      stock: 10,
      quantity: 0,
    }
  ]

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
