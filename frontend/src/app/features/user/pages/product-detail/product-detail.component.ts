import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Product Details</h2><p>Loading specifications...</p>`
})
export class ProductDetailComponent {}
