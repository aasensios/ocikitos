import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incident } from '../models/incident.model';
import { Observable } from 'rxjs';
import { API } from './api.constants';

@Injectable()
export class IncidentsService {

  constructor(
    private http: HttpClient
  ) { }

  getIncidents(): Observable<Incident[]> {
    const url = `${API.API_URL}/incidents`;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.get<Incident[]>(url, options);
  }

  getIncident(id: number): Observable<Incident[]> {
    const url = `${API.API_URL}/incidents/${id}`;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.get<Incident[]>(url, options);
  }

  create(incident: Incident): Observable<Incident> {
    const url = `${API.API_URL}/incidents`;

    const body = incident;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.post<Incident>(url, body, options);
  }

  update(incident: Incident): Observable<Incident> {
    const url = `${API.API_URL}/incidents/${incident.id}`;

    const body = incident;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.put<Incident>(url, body, options);
  }

  delete(incident: Incident): Observable<Incident[]> {
    const url = `${API.API_URL}/incidents/${incident.id}`;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.delete<Incident[]>(url, options);
  }

}
