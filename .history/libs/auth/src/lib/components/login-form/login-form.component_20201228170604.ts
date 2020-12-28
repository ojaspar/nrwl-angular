/* eslint-disable @angular-eslint/no-output-native */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Output } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Authenticate } from 'libs/shared/model';
// import {} from 'libs/'

@Component({
  selector: 'sbsc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<Authenticate>();
  constructor() {}
  login(authenticate: Authenticate) {
    console.log(authenticate);
    this.submit.emit(authenticate);
  }
}
