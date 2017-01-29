import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterComponent } from 'angular-stormpath';

@Component({
  selector: 'sk-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent extends RegisterComponent {

  protected iconsMap: { [name: string] : string; } = {
    "givenName": "fa fa-user fa-fw",
    "surname": "fa fa-user fa-fw",
    "email": "fa fa-envelope fa-fw",
    "password": "fa fa-lock fa-fw"
  };

  consturctor() {}
}
