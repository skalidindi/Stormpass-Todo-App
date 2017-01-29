import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent, Stormpath, LoginService } from 'angular-stormpath';
import { Router } from '@angular/router';

@Component({
  selector: 'sk-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends LoginComponent {

  constructor(public stormpath: Stormpath, public loginService: LoginService, private router: Router) {
    super(stormpath, loginService);
  }

  submitLoginForm(form: any) {
    this.login(form.value);

    this.loggedIn$.subscribe((loggedIn: boolean) => {
      if (loggedIn) {
        this.router.navigate(['/todos']);
      }
    });
  }
}
