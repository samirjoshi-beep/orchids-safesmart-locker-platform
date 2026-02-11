import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>About SafeSmart</h2><p>34+ years of manufacturing excellence...</p>`
})
export class AboutComponent {}
