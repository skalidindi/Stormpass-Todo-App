import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StormpathModule } from 'angular-stormpath';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthPortalComponent } from './auth-portal/auth-portal.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

import { AuthGuard } from './guards/auth-guard.service';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AuthPortalComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StormpathModule,
    routing
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
