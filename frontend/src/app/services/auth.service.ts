import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { API } from './api.constants';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: User): Observable<any> {
    const url = `${API.API_URL}/register`;

    const body = user;

    const options = API.getBasicOptions();

    return this.http.post(url, body, options);
  }

  getToken(user: User): Observable<any> {
    const url = `${API.BASE_URL}/oauth/token`;

    const body = {
      username: user.email,
      password: user.password,
      grant_type: API.GRANT_TYPE,
      client_id: API.CLIENT_ID,
      client_secret: API.CLIENT_SECRET
    };

    const options = API.getBasicOptions();

    return this.http.post(url, body, options);
  }

  getUser(): Observable<User> {
    const url = `${API.API_URL}/user`;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.get<User>(url, options);
  }

  revokeToken(user: User): Observable<any> {
    const url = `${API.BASE_URL}/logout`;

    const body = user;

    // const options = API.getBasicOptions();

    return this.http.post<User>(url, body);
  }

  modifyUser(user: User): Observable<User> {
    const url = `${API.API_URL}/users/${user.id}`;

    const body = user;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.post<User>(url, body, options);
  }

  deleteUser(user: User): Observable<User> {
    const url = `${API.API_URL}/users/${user.id}`;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.delete<User>(url, options);
  }

}
