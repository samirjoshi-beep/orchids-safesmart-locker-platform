import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';

  currentUser = signal<any>(this.getUserFromStorage());

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post<any>('/api/auth/signin', credentials).pipe(
      tap(res => {
        localStorage.setItem(this.TOKEN_KEY, res.token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(res));
        this.currentUser.set(res);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUser.set(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  isAdmin(): boolean {
    const user = this.currentUser();
    return user?.roles?.includes('ROLE_ADMIN') || user?.roles?.includes('ROLE_SUPER_ADMIN');
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private getUserFromStorage() {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }
}
