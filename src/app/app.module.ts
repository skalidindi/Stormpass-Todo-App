import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StormpathModule } from 'angular-stormpath';
import { AngularFireModule, AuthMethods } from 'angularfire2';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthPortalComponent } from './auth-portal/auth-portal.component';
import { TodosPageComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { LoginPageComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FirebaseModule } from './firebase/firebase.module';

import { FirebaseService } from './firebase/firebase.service';
import { AuthGuard } from './guards/auth-guard.service';
import { UnauthGuard } from './guards/unauth-guard.service';
import { TodoService } from './todos/todos.service';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthPortalComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    TodosPageComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StormpathModule,
    FirebaseModule,
    routing
  ],
  providers: [
    AuthGuard,
    UnauthGuard,
    FirebaseService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
