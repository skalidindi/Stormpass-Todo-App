import { Component } from '@angular/core';
import { Observable } from 'rxjs';
// import { Account, Stormpath } from 'angular-stormpath';

@Component({
  selector: 'sk-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [Stormpath]
})
export class AppComponent {
  title = 'app works!';

  constructor() {
  }

}
