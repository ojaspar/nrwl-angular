/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { User } from 'libs/shared/model';
import { AuthService } from '@sbsc/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'sbsc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$: Observable<User>;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
  logout() {
    console.log('hey');
  }
}
