import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/portfolio/portfolio.routes').then(r => r.routes) },
    { path: '', redirectTo: '', pathMatch: 'full' },
];