import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Contact Us</h2><p>Get a quote today...</p>`
})
export class ContactComponent {}
