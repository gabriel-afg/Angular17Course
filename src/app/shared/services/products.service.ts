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

  getOne(id: string) {
    return this.httpClient.get<Product>(`/api/products/${id}`)
  
  }

  create(payload: ProductPayload) {
    return this.httpClient.post('/api/products', payload)
  }

  update(id: string, payload: ProductPayload) {
    return this.httpClient.put(`/api/products/${id}`, payload)
  }
}
