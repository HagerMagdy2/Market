import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get(Environment.baseAPI + 'products')
  }
  getAllCategories() {
    return this.http.get(Environment.baseAPI + 'products/categories')
  }
  getProductsByCategory(_selectedCategory: string) {
    return this.http.get(Environment.baseAPI + 'products/category/'+ _selectedCategory)
  }
}
