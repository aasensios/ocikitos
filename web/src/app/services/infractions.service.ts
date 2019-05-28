import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.get<Infraction[]>(url, options);
  }

  create(infraction: Infraction): Observable<Infraction> {
    const url = `${API.URL}/infractions`;

    const body = infraction;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.post<Infraction>(url, body, options);
  }

  update(infraction: Infraction): Observable<Infraction> {
    const url = `${API.URL}/infractions/${infraction.id}`;

    const body = infraction;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.put<Infraction>(url, body, options);
  }

  delete(infraction: Infraction): Observable<Infraction[]> {
    const url = `${API.URL}/infractions/${infraction.id}`;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.delete<Infraction[]>(url, options);
  }

}
