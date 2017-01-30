import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stormpath, Account } from 'angular-stormpath';

@Component({
  selector: 'sk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent {
  constructor(public stormpath: Stormpath, private router: Router) {
    // Redirect login when user logins successfully
    this.stormpath.user$
      .subscribe((user: Account | boolean) => {
        let authenticated: boolean = !!user;
        if (authenticated) {
          this.router.navigate(['/todos']);
          return false;
        }
        return true;
      });
  }
}
