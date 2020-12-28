import { Injectable } from '@angular/core';
import { Authenticate } from '../../../../../shared/model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../../../shared/model';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from '../../../../../../services';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User>(null);
  user$ = this.userSubject$.asObservable();
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    const user = this.localStorageService.getItem('user');
    if (user) {
      console.log(this.userSubject$);
      //   this.userSubject$.next(JSON.parse('user'));
    }
  }

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:3000/login', authenticate)
      .pipe(
        tap((user: User) => {
          this.userSubject$.next(user);
          this.localStorageService.setItem('user', user);
        })
      );
  }
}
