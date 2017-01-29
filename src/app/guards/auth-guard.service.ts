import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Stormpath, Account } from 'angular-stormpath';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private stormpath: Stormpath) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.stormpath.user$.map((user: Account | boolean) => {
        let isLoggedIn = !!user;
        if (isLoggedIn) {
          return true;
        } else {
          this.router.navigate(['/signin']);
          return false;
        }
      });
    }
}
