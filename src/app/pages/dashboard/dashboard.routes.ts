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
        loadComponent: () => import('./finanzas/finanzas.component').then(m => m.FinanzasComponent),
    },
    {
        path: 'suppliers',
        loadComponent: () => import('./proveedores/proveedores.component').then(m => m.ProveedoresComponent),
    },
    {
        path: 'user-profile',
        loadComponent: () => import('./userProfile/userProfile.component').then(m => m.UserProfileComponent),
    },
];