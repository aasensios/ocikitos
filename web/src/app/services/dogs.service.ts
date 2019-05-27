import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    // console.log(options.headers);

    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    return this.http.get<Dog[]>(url, options);
  }

  // Add Dog
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
    // console.log(options.headers);

    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    return this.http.delete<Dog[]>(url, options);
  }

  // // Modify dog
  // modifyDog(dog: Dog): Observable<Dog> {
  //   return this.http.put(`${API.URL}/dogs/${dog.id}`, dog, API.options);
  // }

  // // Delete Dog
  // deleteDog(dog: Dog): Observable<Dog> {
  //   const url = `${API.URL}/${dog.id}`;
  //   return this.http.delete<Dog>(`${API.URL}/dogs/${dog.id}`, API.options);
  // }

  // insertDog(dog: Dog): Observable<Dog> {
  //   const url = `${API.URL}/dogs`;
  //   // set query parameters from form data

  //   const httpParams = new HttpParams()
  //     .append('chip', dog.chip)
  //     .append('name', dog.name)
  //     .append('gender', dog.gender)
  //     .append('breed_id', dog.breed_id.toString())
  //     .append('color_id', dog.color_id.toString())
  //     .append('birthdate', dog.birthdate.toString())
  //     .append('owner_dni', dog.owner_dni)
  //     .append('owner_fullname', dog.owner_fullname)
  //     .append('residence', dog.residence);


  //   // configure headers for form data.
  //   const httpHeaders: HttpHeaders = new HttpHeaders();

  //   httpHeaders.set('Accept', 'application/json');

  //   // send request
  //   return this.http
  //     .post<Dog>(url, httpParams, { headers: httpHeaders });
  //     // .pipe(catchError(this.handleError<any>('insert', [])));
  //   // .pipe(catchError(this.handleError));
  // }
}
