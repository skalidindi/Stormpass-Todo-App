import { Component, OnInit } from '@angular/core';
import { Stormpath, BaseStormpathAccount } from 'angular-stormpath';
import { FirebaseService } from '../firebase/firebase.service';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
  selector: 'sk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private loggedInToFirebase : boolean;

  constructor(private stormpath: Stormpath,
              private firebaseService: FirebaseService) {
    this.loggedInToFirebase = false;
    this.stormpath.user$.subscribe((user: BaseStormpathAccount) => {
      if (!!user) {
        this.firebaseService.signIn(user.href, user.fullName).then((logged) => {
          console.log("Logged into firebase", logged);
          this.loggedInToFirebase = true;
        });
      }
    });
  }

  signOut() {
    this.stormpath.logout();

    // Keep getting permission denied error for some reason when I try to sign out of firebase
    // Otherwise this call should be made to
    // this.firebaseService.signOut();

    // Workaround for now
    localStorage.clear();
  }
}
