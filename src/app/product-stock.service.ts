import { Injectable } from '@angular/core';
import { Product } from './components-list/Product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const Url = 'https://62bf51900bc9b125616baca4.mockapi.io/api/table/Products'

@Injectable({
  providedIn: 'root'
})
export class ProductStockService {

  private $stock: Product[] = [];
  stock: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
  }

  public getAll(): void {
    this.http.get<Product[]>(Url).subscribe(data => {
                                            this.$stock = data;
                                            this.stock.next(this.$stock)
    });
  }
  removeFromCart(product: Product) {  
    let item: Product | undefined = this.$stock.find((v1) => v1.name == product.name);
    if (item) {
      item.stock += product.quantity;
    }
    this.stock.next(this.$stock)
  }
}
