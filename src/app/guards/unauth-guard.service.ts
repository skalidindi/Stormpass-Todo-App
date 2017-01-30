import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Stormpath, Account } from 'angular-stormpath';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UnauthGuard implements CanActivate {

    constructor(private router: Router, private stormpath: Stormpath) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.stormpath.user$
        .take(1)
        .map((user: Account | boolean) => {
          let authenticated: boolean = !!user;
          if (authenticated) {
            this.router.navigate(['/todos']);
            return false;
          }
          return true;
        });
    }
}
