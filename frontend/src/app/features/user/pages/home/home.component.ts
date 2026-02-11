import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <nav>
        <h1>SafeSmart</h1>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    <main>
      <section class="hero">
        <h2>Premium Lockers for Your Peace of Mind</h2>
        <p>34+ years of industry experience.</p>
      </section>
    </main>
  `,
  styles: [`
    header { background: #333; color: white; padding: 1rem; }
    nav { display: flex; justify-content: space-between; align-items: center; }
    ul { display: flex; list-style: none; gap: 1rem; }
    .hero { padding: 4rem 2rem; text-align: center; background: #f4f4f4; }
  `]
})
export class HomeComponent {}
