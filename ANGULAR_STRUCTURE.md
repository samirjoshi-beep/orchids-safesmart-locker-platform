# Angular Folder Structure: SafeSmart.in

```text
src/
├── app/
│   ├── core/                  # Singleton services, global models, interceptors
│   │   ├── interceptors/      # AuthInterceptor, ErrorInterceptor
│   │   ├── guards/            # AuthGuard, AdminGuard, RoleGuard
│   │   ├── services/          # AuthService, ApiService, CmsService
│   │   └── models/            # Shared interfaces (Product, Category, User)
│   │
│   ├── shared/                # Reusable UI components, pipes, directives
│   │   ├── components/        # Button, Card, Navbar, Footer (Shared)
│   │   ├── pipes/             # SlugifyPipe, SafeHtmlPipe
│   │   └── directives/        # LazyLoadDirective
│   │
│   ├── modules/               # Feature-based lazy-loaded modules
│   │   ├── user/              # Public facing website
│   │   │   ├── pages/         # Home, About, ProductList, ProductDetail
│   │   │   ├── components/    # Hero, InquiryForm, CertificationCard
│   │   │   └── user-routing.module.ts
│   │   │
│   │   ├── admin/             # Secure CMS panel
│   │   │   ├── pages/         # Dashboard, ProductMgmt, CmsMgmt, Inquiries
│   │   │   ├── components/    # AdminSidebar, ImageUploader, StatCard
│   │   │   └── admin-routing.module.ts
│   │   │
│   │   └── auth/              # Authentication flows (Login)
│   │       ├── pages/         # LoginPage
│   │       └── auth-routing.module.ts
│   │
│   ├── app-routing.module.ts  # Main route config (Lazy loading triggers)
│   ├── app.component.ts
│   └── app.module.ts
│
├── assets/
│   ├── images/                # Static brand images
│   ├── icons/                 # SVG icons
│   └── styles/                # Global SASS variables, themes, mixins
│
└── environments/              # prod vs dev configs
```

## Production Guidelines
- **Lazy Loading:** `user`, `admin`, and `auth` are loaded only when requested.
- **Strict Typing:** All data models must be typed in `core/models`.
- **SCSS Architect:** Use a modular style approach (`_variables.scss`, `_mixins.scss`).
- **State Management:** For this scale, Service-based state management (Subject/BehaviorSubject) is preferred over NGRX unless complexity grows.
