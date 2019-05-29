import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../models/dog.model';
import { Observable } from 'rxjs';
import { API } from './api.constants';

@Injectable()
export class DogsService {

  constructor(
    private http: HttpClient
  ) { }

  getDogs(): Observable<Dog[]> {
    const url = `${API.API_URL}/dogs`;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.get<Dog[]>(url, options);
  }

  create(dog: Dog): Observable<Dog> {
    const url = `${API.API_URL}/dogs`;

    const body = dog;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.post<Dog>(url, body, options);
  }

  update(dog: Dog): Observable<Dog> {
    const url = `${API.API_URL}/dogs/${dog.id}`;

    const body = dog;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.put<Dog>(url, body, options);
  }

  delete(dog: Dog): Observable<Dog[]> {
    const url = `${API.API_URL}/dogs/${dog.id}`;

    const accessToken = localStorage.getItem('access_token');

    const options = API.getAuthOptions(accessToken);

    return this.http.delete<Dog[]>(url, options);
  }

}
