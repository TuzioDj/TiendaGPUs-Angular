import { Injectable } from '@angular/core';
import { Product } from './components-list/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const Url = 'https://62bf51900bc9b125616baca4.mockapi.io/api/table/Products'

@Injectable({
  providedIn: 'root'
})
export class ProductStockService {

  constructor(private http: HttpClient) {

  }

  public getAll() : Observable<Product[]> {
    return this.http.get<Product[]>(Url)
  }
}
