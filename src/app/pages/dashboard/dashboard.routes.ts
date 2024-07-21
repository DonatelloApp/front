import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'stock',
        //modificar ruta componente cuando se termine
        loadComponent: () => import('./stock/stock.component').then(m => m.StockComponent),
    },
    /*{
        path: 'finance',
        loadComponent: () => import('./finanzas/finanzas.component').then(m => m.FinanzasComponent),
    },*/
    {
        path: 'finance',
        loadComponent: () => import('./inProgress/in-progress.component').then(m => m.InProgressComponent),
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