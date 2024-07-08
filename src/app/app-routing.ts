import { Routes } from '@angular/router';
//import { authGuard, publicGuard } from './core/guards';

export const routes: Routes = [
  {
    path: '',
    //canActivate: [authGuard],
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'auth',
    //canActivate: [publicGuard],
    children: [
      {
        path: 'log-in',
        loadComponent: () => import('./pages/auth/log-in/log-in.component'),
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/auth/register/RegisterForm/RegisterForm.component').then(m => m.RegisterFormComponent),
      },
    ],
  },
];
