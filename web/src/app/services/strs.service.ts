import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Str } from '../models/str.model';
import { Observable } from 'rxjs';
import { API } from './api.constants';

@Injectable()
export class StrsService {

  constructor(
    private http: HttpClient
  ) { }

  getStrs(): Observable<Str[]> {
    const url = `${API.API_URL}/strs`;

    // User access token stored in the browser's local storage.
    const accessToken = localStorage.getItem('access_token');

    // const options = API.options;
    // options.headers.append('Authorization', `Bearer ${accessToken}`);

    const options = API.getAuthOptions(accessToken);

    return this.http.get<Str[]>(url, options);
  }

  create(str: Str): Observable<Str> {
    const url = `${API.API_URL}/strs`;

    const body = str;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.post<Str>(url, body, options);
  }

  update(str: Str): Observable<Str> {
    const url = `${API.API_URL}/strs/${str.id}`;

    const body = str;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.put<Str>(url, body, options);
  }

  delete(str: Str): Observable<Str[]> {
    const url = `${API.API_URL}/strs/${str.id}`;

    // User access token stored in the browser's local storage.
    const accessToken = localStorage.getItem('access_token');

    // const options = API.options;
    // options.headers.append('Authorization', `Bearer ${accessToken}`);

    const options = API.getAuthOptions(accessToken);

    return this.http.delete<Str[]>(url, options);
  }

}
