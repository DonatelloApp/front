import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        //modificar ruta componente cuando se termine
        loadComponent: () => import('./userProfile/userProfile.component').then(m => m.UserProfileComponent),
    },
    {
        path: 'stock',
        //modificar ruta componente cuando se termine
        loadComponent: () => import('./userProfile/userProfile.component').then(m => m.UserProfileComponent),
    },
    {
        path: 'finance',
        //modificar ruta componente cuando se termine
        loadComponent: () => import('./userProfile/userProfile.component').then(m => m.UserProfileComponent),
    },
    {
        path: 'suppliers',
        //modificar ruta componente cuando se termine
        loadComponent: () => import('./userProfile/userProfile.component').then(m => m.UserProfileComponent),
    },
    {
        path: 'user-profile',
        loadComponent: () => import('./userProfile/userProfile.component').then(m => m.UserProfileComponent),
    },
];