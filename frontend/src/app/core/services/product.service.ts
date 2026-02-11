import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private publicUrl = '/api/public/products';
  private adminUrl = '/api/admin/products';

  constructor(private http: HttpClient) {}

  // Public Methods
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.publicUrl);
  }

  getProductBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.publicUrl}/${slug}`);
  }

  // Admin Methods
  createProduct(product: any): Observable<any> {
    return this.http.post<any>(this.adminUrl, product);
  }

  updateProduct(id: string, product: any): Observable<any> {
    return this.http.put<any>(`${this.adminUrl}/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${this.adminUrl}/${id}`);
  }
}
