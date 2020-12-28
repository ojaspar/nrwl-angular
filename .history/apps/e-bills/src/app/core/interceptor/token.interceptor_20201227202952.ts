/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';
import SessionStorageService from '../services/shared/sessionStorage';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  authenticationToken$ = of();
  authenticationToken: string;
  constructor(private sessionStorage: SessionStorageService) {
    this.authenticationToken = sessionStorage.getItem('auth-Token')

    // const helper = new JwtHelperService();
    // const decodeToken = helper.decodeToken(this.authenticationToken);
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authenticationToken}`,
      },
    });

    return next.handle(request);
  }
}
