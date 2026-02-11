import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Our Lockers</h2><p>Browsing our premium collection...</p>`
})
export class ProductsComponent {}
