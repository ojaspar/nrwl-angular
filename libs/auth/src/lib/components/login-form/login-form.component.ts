/* eslint-disable @angular-eslint/no-output-native */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Authenticate } from 'libs/shared/model';

@Component({
  selector: 'sbsc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<Authenticate>();
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor() {}
  login() {
    this.submit.emit({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    } as Authenticate);
  }
}
