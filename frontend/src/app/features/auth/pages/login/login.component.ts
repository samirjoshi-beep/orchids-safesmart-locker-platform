import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
        <h2>Admin Login</h2>
        <div class="form-group">
          <label>Username</label>
          <input type="text" [(ngModel)]="credentials.username" name="username" required>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" [(ngModel)]="credentials.password" name="password" required>
        </div>
        <button type="submit" [disabled]="!loginForm.form.valid">Login</button>
        <p *ngIf="error" class="error">{{ error }}</p>
      </form>
    </div>
  `,
  styles: [`
    .login-container { display: flex; justify-content: center; align-items: center; height: 100vh; }
    form { padding: 2rem; border: 1px solid #ccc; border-radius: 8px; width: 300px; }
    .form-group { margin-bottom: 1rem; }
    input { width: 100%; padding: 0.5rem; }
    button { width: 100%; padding: 0.5rem; background: #333; color: white; border: none; cursor: pointer; }
    .error { color: red; margin-top: 1rem; }
  `]
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: () => this.router.navigate(['/admin']),
      error: () => this.error = 'Invalid credentials'
    });
  }
}
