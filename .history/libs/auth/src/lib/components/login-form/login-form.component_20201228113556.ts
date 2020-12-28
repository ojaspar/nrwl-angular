/* eslint-disable @angular-eslint/no-output-native */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Output } from '@angular/core';
import { Authenticate } from '../../../../../shared/model';

@Component({
  selector: 'sbsc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<Authenticate>();
  constructor() {}
  login(authenticate: Authenticate) {
    this.submit.emit(authenticate);
  }
}
