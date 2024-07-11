import { Component } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Product } from '../components-list/Product';
import { observable } from 'rxjs';

@Component({
  selector: 'app-components-cart',
  templateUrl: './components-cart.component.html',
  styleUrl: './components-cart.component.scss'
})
export class ComponentsCartComponent {
  cartList: Product[] = [];
  constructor(private cartService : CartServiceService){
    cartService.cartList.subscribe(c => this.cartList = c);
  }

}
