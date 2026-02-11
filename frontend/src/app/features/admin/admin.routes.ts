import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/product-list/product-list.component').then(m => m.ProductListComponent)
  },
  {
    path: 'cms',
    loadComponent: () => import('./pages/cms-manager/cms-manager.component').then(m => m.CmsManagerComponent)
  },
  {
    path: 'inquiries',
    loadComponent: () => import('./pages/inquiries/inquiries.component').then(m => m.InquiriesComponent)
  }
];
