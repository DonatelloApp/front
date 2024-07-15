import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [ {
    path: 'stock',
    loadComponent: () => import('./stock/stock.component').then(m => m.StockComponent),
  },];
