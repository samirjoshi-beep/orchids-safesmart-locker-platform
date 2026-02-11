import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Product Management</h2>
    <button (click)="addProduct()">Add New Product</button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>SKU</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of products">
          <td>{{ product.name }}</td>
          <td>{{ product.sku }}</td>
          <td>{{ product.active ? 'Active' : 'Inactive' }}</td>
          <td>
            <button (click)="editProduct(product)">Edit</button>
            <button (click)="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background-color: #f2f2f2; }
    button { margin-right: 5px; cursor: pointer; }
  `]
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  addProduct() {
    // Logic for adding a product (modal or new route)
  }

  editProduct(product: any) {
    // Logic for editing
  }

  deleteProduct(id: string) {
    if (confirm('Are you sure?')) {
      this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
    }
  }
}
