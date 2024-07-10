import { Routes } from '@angular/router';
import { authGuard } from './core/guards';
import { AUTH_ROUTES } from './pages/auth/auth.routes';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.routes').then(m => m.LANDING_ROUTES),
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/notFound/notFound.component').then(m => m.NotFoundComponent),
  },
];
