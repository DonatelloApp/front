import { Routes } from '@angular/router';
//import { authGuard, publicGuard } from './core/guards';

export const routes: Routes = [
  /*{
    path: '',
    //canActivate: [authGuard],
    loadComponent: () => import('./pages/home/home.component'),
  },*/
  {
    path: 'auth',
    //canActivate: [publicGuard],
    children: [
      {
        path: 'log-in',
        loadComponent: () => import('./pages/auth/logIn/logIn.component'),
      },
      {
        path: 'sing-in',
        loadComponent: () => import('./pages/auth/singIn/singIn.component').then(m => m.SingInComponent),
      },
    ],
  },
  {
    path:'proveedores',
    loadComponent:()=>import('./pages/proveedores/proveedores.component').then(m=>m.ProveedoresComponent)
  }
];
