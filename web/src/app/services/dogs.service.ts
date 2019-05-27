import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dog } from '../models/dog.model';
import { Observable } from 'rxjs';
import { API } from './api.constants';

@Injectable()
export class DogsService {

  constructor(
    private http: HttpClient
  ) { }

  getDogs(): Observable<Dog[]> {
    const url = `${API.URL}/dogs`;

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

    return this.http.get<Dog[]>(url, options);
  }

  create(dog: Dog): Observable<Dog> {
    const url = `${API.URL}/dogs`;

    const body = dog;

    const accessToken = localStorage.access_token;

    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    return this.http.post<Dog>(url, body, options);
  }

  update(dog: Dog): Observable<Dog> {
    const url = `${API.URL}/dogs/${dog.id}`;

    const body = dog;

    const accessToken = localStorage.access_token;

    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    return this.http.put<Dog>(url, body, options);
  }

  delete(dog: Dog): Observable<Dog[]> {
    const url = `${API.URL}/dogs/${dog.id}`;

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

    return this.http.delete<Dog[]>(url, options);
  }

}
