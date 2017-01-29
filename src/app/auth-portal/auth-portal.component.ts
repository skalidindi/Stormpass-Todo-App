import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthPortComponent } from 'angular-stormpath';

@Component({
  selector: 'sk-auth-portal',
  templateUrl: './auth-portal.component.html',
  styleUrls: ['./auth-portal.component.scss']
})
export class AuthPortalComponent extends AuthPortComponent {
}
