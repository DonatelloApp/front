import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./userProfile/userProfile.component').then(m => m.UserProfileComponent),
    },
    {
        path: 'stock',
        loadComponent: () => import('./userProfile/userProfile.component').then(m => m.UserProfileComponent),
    },
    {
        path: 'finance',
        loadComponent: () => import('./userProfile/userProfile.component').then(m => m.UserProfileComponent),
    },
    {
        path: 'suppliers',
        loadComponent: () => import('./userProfile/userProfile.component').then(m => m.UserProfileComponent),
    },
    {
        path: 'user-profile',
        loadComponent: () => import('./userProfile/userProfile.component').then(m => m.UserProfileComponent),
    },
];