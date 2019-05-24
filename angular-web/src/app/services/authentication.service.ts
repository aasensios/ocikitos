import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../shared/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: User): Observable<any> {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json'
    });
    const body = {
      grant_type: 'password',
      client_id: 1,
      client_secret: 'GYzFaIDLNkkv4eoWW8W31AaX3s5PiTN3nzbUyuJn',
      username: user.email,
      password: user.password,
      scope: '*'
    };



    return this.http.post('http://localhost:8000/api/oauth/token', body, { headers })
      .pipe(map(data => {

        console.log(data);

        // Login successful if there's a Laravel Passport access_token key in the response.
        // if (data && data.access_token) {
        //   // Store user details and Laravel Passport data response in local storage to keep user logged in between page refreshes.
        //   localStorage.setItem('user', JSON.stringify(data));
        //   this.currentUserSubject.next(data);
        // }

        // return data;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
