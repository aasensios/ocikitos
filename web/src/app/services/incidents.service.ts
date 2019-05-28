import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Incident } from '../models/incident.model';
import { Observable } from 'rxjs';
import { API } from './api.constants';

@Injectable()
export class IncidentsService {

  constructor(
    private http: HttpClient
  ) { }

  getIncidents(): Observable<Incident[]> {
    const url = `${API.URL}/incidents`;

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

    return this.http.get<Incident[]>(url, options);
  }

  create(incident: Incident): Observable<Incident> {
    const url = `${API.URL}/incidents`;

    const body = incident;

    const accessToken = localStorage.access_token;

    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    return this.http.post<Incident>(url, body, options);
  }

  update(incident: Incident): Observable<Incident> {
    const url = `${API.URL}/incidents/${incident.id}`;

    const body = incident;

    const accessToken = localStorage.access_token;

    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    return this.http.put<Incident>(url, body, options);
  }

  delete(incident: Incident): Observable<Incident[]> {
    const url = `${API.URL}/incidents/${incident.id}`;

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

    return this.http.delete<Incident[]>(url, options);
  }

}