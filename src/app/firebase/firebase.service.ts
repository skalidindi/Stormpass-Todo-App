import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, AuthProviders, AuthMethods, AngularFireAuth } from 'angularfire2';

import { Stormpath, JsonPostOptions } from 'angular-stormpath';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class FirebaseService {

  private authState: FirebaseAuthState = null;

  constructor(public angularFire: AngularFire,
              public http: Http) {
    this.angularFire.auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.angularFire.auth.getAuth() !== null;
  }

  get id(): string {
    return this.authenticated ? this.angularFire.auth.getAuth().uid : '';
  }

  private getJwtToken(uid: string, fullName: string): Promise<string | boolean> {
    const httpPostData = JSON.stringify({
      uid,
      fullName
    });

    return this.http.post('/token', httpPostData, new JsonPostOptions())
      .map((res: Response) => {
        console.log(res);
        try {
          return res.json();
        } catch (e) {
          throw new Error('Response was not JSON, check your server configuration');
        }
      })
      .map((json: any): string => {
        if (json && json.token) {
          return json.token;
        } else {
          Observable.throw(new Error('expected an account response'));
        }
      })
      // .map(this.accountTransformer)
      .catch((error: any) => {
        if (error.status && error.status === 401) {
          return Observable.of(false);
        }
        if (error.status && error.status === 404) {
          return Observable.throw(new Error('/me endpoint not found, please check server configuration.'));
        }
        return Observable.throw(error);
      })
      .toPromise();
  }

  signIn(href: string, fullName: string) {
    const uid: string = href.substring(href.lastIndexOf('/') + 1);
    return this.getJwtToken(uid, fullName).then((token: string) => {
      return this.angularFire.auth.login(token, {
        provider: AuthProviders.Custom,
        method: AuthMethods.CustomToken
      })
      .catch(error => console.error('ERROR (failed to sign in to firebase)', error));
    });
  }

  signOut(): void {
    this.angularFire.auth.unsubscribe();
    this.angularFire.auth.logout();
  }
}
