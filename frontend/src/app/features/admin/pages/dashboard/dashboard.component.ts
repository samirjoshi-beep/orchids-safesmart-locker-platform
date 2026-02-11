import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  template: `
    <div class="admin-layout">
      <nav class="sidebar">
        <h3>SafeSmart Admin</h3>
        <ul>
          <li><a routerLink="/admin" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Dashboard</a></li>
          <li><a routerLink="/admin/products" routerLinkActive="active">Products</a></li>
          <li><a routerLink="/admin/cms" routerLinkActive="active">CMS Content</a></li>
          <li><a routerLink="/admin/inquiries" routerLinkActive="active">Inquiries</a></li>
        </ul>
        <button (click)="logout()">Logout</button>
      </nav>
      <main class="content">
        <h1>Admin Dashboard</h1>
        <div class="stats">
          <p>Welcome to the SafeSmart administration panel.</p>
        </div>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .admin-layout { display: flex; height: 100vh; }
    .sidebar { width: 250px; background: #2c3e50; color: white; padding: 1rem; }
    .sidebar ul { list-style: none; padding: 0; }
    .sidebar li { margin-bottom: 1rem; }
    .sidebar a { color: #ecf0f1; text-decoration: none; }
    .sidebar a.active { font-weight: bold; color: #3498db; }
    .content { flex: 1; padding: 2rem; background: #f9f9f9; }
    button { margin-top: 2rem; padding: 0.5rem 1rem; cursor: pointer; }
  `]
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
