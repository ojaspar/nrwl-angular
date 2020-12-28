/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Authenticate } from 'libs/shared/model';
import { AuthService } from '../../services/auth/auth.service';
import { User } from 'libs/shared/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'sbsc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  user$: Observable<User>;
  ngOnInit() {
    this.user$ = this.authService.user$;
  }
  // login(authenticate: Authenticate) {
  //   this.authService.login(authenticate).subscribe();
  // }
}
