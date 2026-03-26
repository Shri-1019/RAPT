import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingComponent) },
  { 
    path: 'auth',
    children: [
      { path: 'login', loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent) },
      { path: 'signup', loadComponent: () => import('./features/auth/signup/signup-role.component').then(m => m.SignupRoleComponent) },
      { path: 'signup/:role', loadComponent: () => import('./features/auth/signup/signup-landlord.component').then(m => m.SignupLandlordComponent) }
    ]
  },
  { path: '**', redirectTo: '/home' }
];