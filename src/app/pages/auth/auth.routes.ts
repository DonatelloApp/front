import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
    {
      path: 'log-in',
      loadComponent: () => import('src/app/pages/auth/logIn/logIn.component').then(m => m.LogInComponent),
    },
    {
      path: 'sing-in',
      loadComponent: () => import('src/app/pages/auth/singIn/singIn.component').then(m => m.SingInComponent),
    },
  ];