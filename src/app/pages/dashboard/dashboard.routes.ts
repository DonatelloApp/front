import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: 'user-profile',
        loadComponent: () => import('./userProfile/userProfile.component').then(m => m.UserProfileComponent),
    },
];