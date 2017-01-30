import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './guards/auth-guard.service';
import { UnauthGuard } from './guards/unauth-guard.service';

// Route Configuration
export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'signin', component: LoginPageComponent, canActivate: [UnauthGuard] },
  { path: 'todos', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent, canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
