import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url = 'http://localhost:8000/';

  login(user: User) {
    const data = {
      grant_type: 'password',
      client_id: 1,
      client_secret: 'aoa8j3svV0KmNQ30PH0LrcTbjeXlHAAeqnyBgwfB',
      username: user.email,
      password: user.password,
      scope: '*'
    };

    return this.http.post<any>(this.url + 'oauth/token', data);
  }
  constructor(private http: HttpClient) { }
}
