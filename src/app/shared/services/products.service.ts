import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../@types/product.interface';
import { ProductPayload } from '../@types/payload.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('/api/products')
  }

  create(payload: ProductPayload) {
    return this.httpClient.post('/api/products', payload)
  }
}
