import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sample } from '../models/sample.model';
import { Observable } from 'rxjs';
import { API } from './api.constants';

@Injectable()
export class SamplesService {

  constructor(
    private http: HttpClient
  ) { }

  getSamples(): Observable<Sample[]> {
    const url = `${API.URL}/samples`;

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

    return this.http.get<Sample[]>(url, options);
  }

  create(sample: Sample): Observable<Sample> {
    const url = `${API.URL}/samples`;

    const body = sample;

    const accessToken = localStorage.access_token;

    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    return this.http.post<Sample>(url, body, options);
  }

  update(sample: Sample): Observable<Sample> {
    const url = `${API.URL}/samples/${sample.id}`;

    const body = sample;

    const accessToken = localStorage.access_token;

    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    return this.http.put<Sample>(url, body, options);
  }

  delete(sample: Sample): Observable<Sample[]> {
    const url = `${API.URL}/samples/${sample.id}`;

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

    return this.http.delete<Sample[]>(url, options);
  }

}
