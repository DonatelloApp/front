import { Routes } from '@angular/router';
import { authGuard } from './core/guards';
import { AUTH_ROUTES } from './pages/auth/auth.routes';
import { publicGuard } from './core/guards/public.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.routes').then(m => m.LANDING_ROUTES),
    canActivate: [publicGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES),
    canActivate: [publicGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: '**',
    loadComponent: () => import('./pages/notFound/notFound.component').then(m => m.NotFoundComponent),
  },
  {
    path:'proveedores',
    loadComponent:()=>import('./pages/proveedores/proveedores.component').then(m=>m.ProveedoresComponent)
  }
];
