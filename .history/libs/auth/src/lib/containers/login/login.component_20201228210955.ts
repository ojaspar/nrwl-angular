/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Authenticate } from 'libs/shared/model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'sbsc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  login(authenticate: Authenticate) {
    this.authService.login(authenticate).subscribe();
  }
}
