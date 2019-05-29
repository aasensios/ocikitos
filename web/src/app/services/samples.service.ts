import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sample } from '../models/sample.model';
import { Observable } from 'rxjs';
import { API } from './api.constants';

@Injectable()
export class SamplesService {

  constructor(
    private http: HttpClient
  ) { }

  getSamples(): Observable<Sample[]> {
    const url = `${API.API_URL}/samples`;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.get<Sample[]>(url, options);
  }

  create(sample: Sample): Observable<Sample> {
    const url = `${API.API_URL}/samples`;

    const body = sample;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.post<Sample>(url, body, options);
  }

  update(sample: Sample): Observable<Sample> {
    const url = `${API.API_URL}/samples/${sample.id}`;

    const body = sample;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.put<Sample>(url, body, options);
  }

  delete(sample: Sample): Observable<Sample[]> {
    const url = `${API.API_URL}/samples/${sample.id}`;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.delete<Sample[]>(url, options);
  }

}
