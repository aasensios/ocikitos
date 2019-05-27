import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { API } from './api.constants';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: User) {
    const url = `${API.URL}/register`;

    const body = {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation
    };

    return this.http.post(url, body, API.options);
  }

  loginUser(user: User): Observable<any> {
    const url = `${API.BASE_URL}/oauth/token`;

    const body = {
      username: user.email,
      password: user.password,
      grant_type: API.GRANT_TYPE,
      client_id: API.CLIENT_ID,
      client_secret: API.CLIENT_SECRET
    };

    return this.http.post(url, body, API.options);
  }

  getUser(): Observable<User> {
    const url = `${API.URL}/user`;

    // User access token stored in the browser's local storage.
    const accessToken = localStorage.access_token;

    // const options = API.options;
    // options.headers.append('Authorization', `Bearer ${accessToken}`);
    // console.log(options.headers);

    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    return this.http.get<User>(url, options);
  }

  // // Add User
  // addUser(user: User): Observable<any> {
  //   return this.http.post<User>(`${URL}/users`, user, this.options);
  // }

  // // Toggle Completed
  // modifyUser(user: User): Observable<any> {
  //   return this.http.put(`${URL}/users/${user.id}`, user, this.options);
  // }

  // // Delete User
  // deleteUser(user: User): Observable<any> {
  //   const url = `${URL}/${user.id}`;
  //   return this.http.delete<User>(`${URL}/users/${user.id}`, this.options);
  // }

}
