import { Routes } from '@angular/router';

export const LANDING_ROUTES: Routes = [
    {
      path: '',
      loadComponent: () => import('src/app/pages/landing/landing.component').then(m => m.LandingComponent),
    },
  ];