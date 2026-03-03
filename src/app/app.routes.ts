import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./Pages/home/home').then(m => m.Home)
  },

  {
    path: 'state/:code',
    loadComponent: () =>
      import('./Pages/state-detail/state-detail')
        .then(m => m.StateDetail)
  },

  { path: '**', redirectTo: 'dashboard' }

];
