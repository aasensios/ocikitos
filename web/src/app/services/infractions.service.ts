import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Infraction } from '../models/infraction.model';
import { Observable } from 'rxjs';
import { API } from './api.constants';

@Injectable()
export class InfractionsService {

  constructor(
    private http: HttpClient
  ) { }

  getInfractions(): Observable<Infraction[]> {
    const url = `${API.URL}/infractions`;

    // User access token stored in the browser's local storage.
    const accessToken = localStorage.access_token;

    // const options = API.options;
    // options.headers.append('Authorization', `Bearer ${accessToken}`);

    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    return this.http.get<Infraction[]>(url, options);
  }

  create(infraction: Infraction): Observable<Infraction> {
    const url = `${API.URL}/infractions`;

    const body = infraction;

    const accessToken = localStorage.access_token;

    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    return this.http.post<Infraction>(url, body, options);
  }

  update(infraction: Infraction): Observable<Infraction> {
    const url = `${API.URL}/infractions/${infraction.id}`;

    const body = infraction;

    const accessToken = localStorage.access_token;

    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    return this.http.put<Infraction>(url, body, options);
  }

  delete(infraction: Infraction): Observable<Infraction[]> {
    const url = `${API.URL}/infractions/${infraction.id}`;

    // User access token stored in the browser's local storage.
    const accessToken = localStorage.access_token;

    // const options = API.options;
    // options.headers.append('Authorization', `Bearer ${accessToken}`);

    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    return this.http.delete<Infraction[]>(url, options);
  }

}