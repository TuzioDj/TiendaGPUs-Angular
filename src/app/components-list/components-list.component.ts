import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrl: './components-list.component.scss'
})
export class ComponentsListComponent {
  products: Product[] = [
    {
      name: 'Producto',
      type: 'Tipo',
      price: 50,
      stock: 5,
      quantity: 5,
    },
    {
      name: 'Producto2',
      type: 'Tipo',
      price: 50,
      stock: 5,
      quantity: 5,
    }
  ]
  
  increment(product: Product): void {
    if (product.quantity < product.stock) {
      product.quantity++;
    };
  }
  mensaje: string = '';

  // Define una función
  mostrarMensaje(): void {
    this.mensaje = '¡Hola desde Angular!';
  }

  decrement(product: Product) : void {
    console.log("abueeelo");
    
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  }
}
