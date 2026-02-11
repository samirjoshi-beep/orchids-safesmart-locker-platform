# Admin vs User Route Strategy: SafeSmart.in

## 1. Route Configuration (`app-routing.module.ts`)

The root router handles high-level lazy loading.

```typescript
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'secure-portal', // Obfuscated path for admin
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard] // Protects the entry point
  },
  { path: '**', redirectTo: '' }
];
```

## 2. Admin Route Protection (`AdminGuard`)
- **JWT Verification:** Checks for a valid token in localStorage/Cookies.
- **Role Verification:** Decodes JWT to ensure user has `ROLE_ADMIN` or `ROLE_SUPER_ADMIN`.
- **Redirect:** If unauthorized, silently redirect to `Home` (no clues about admin panel exist).

## 3. SEO & Public Routing
- **User Module:** Uses semantic URLs (`/products/:category-slug/:product-slug`).
- **CMS Handling:** A wildcard route within the User Module can handle dynamic CMS pages fetched by slug.
- **Static appearance:** Routes like `/about`, `/industries` appear static but fetch data from `CmsService`.

## 4. Security Enhancements
- **No Bundle Leakage:** The `admin` module code is separate from the main `vendor.js` or `main.js` chunk. It is only downloaded after the user enters the `/secure-portal` path and passes the guard.
- **XSRF Protection:** Implement Spring Security's CSRF/XSRF tokens on all state-changing admin requests.
- **Rate Limiting:** Protect the `/auth/login` and `/secure-portal` routes with backend rate limiting.

## 5. URL Strategy
- **User:** `safesmart.in/` (Clean, SEO-friendly)
- **Admin:** `safesmart.in/secure-portal/dashboard` (Non-obvious, guarded)
- **API:** `api.safesmart.in/v1/admin/...` (Protected by JWT)
