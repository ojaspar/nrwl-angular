import { Injectable } from '@angular/core';
import { Authenticate } from '../../../../../shared/model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../../../shared/model';
import { map, tap } from 'rxjs/operators';
import { LocalStorageService } from '../../../../../../services';
import { Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User>(null);
  user$ = this.userSubject$.asObservable();
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    const user = this.localStorageService.getItem('user');
    if (user) {
      this.userSubject$.next(JSON.parse(user));
    }
  }

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:3000/login', authenticate)
      .pipe(
        tap((user: User) => {
          console.log(user);
          this.userSubject$.next(user);
          this.localStorageService.setItem('user', JSON.stringify(user));
        })
      );
  }
  logout() {
    this.user$ = new BehaviorSubject<User>(null);
    this.localStorageService.clear();
    this.router.navigate(['/auth']);
  }
}
