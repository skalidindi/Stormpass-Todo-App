import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthPortalComponent } from './auth-portal/auth-portal.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { AuthGuard } from './guards/auth-guard.service';

// Route Configuration
export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'signin', component: LoginComponent },
  { path: 'todos', component: TodoListComponent, canActivate: [AuthGuard] },
];

//canActiviate: [AuthGuard]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
