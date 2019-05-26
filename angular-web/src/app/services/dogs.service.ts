import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Dog } from '../models/dog.model';
import { Observable } from 'rxjs';

@Injectable()
export class DogsService {

  private url = 'http://apps.proven.cat/~dawbi1901/api/api/';

  constructor(
    private http: HttpClient
  ) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.url+'dogs');
  }

  insert(dog: Dog): Observable<Dog> {
    const url = `${this.url}/dogs`;
    // set query parameters from form data

    let httpParams = new HttpParams()
      .append('chip', dog.chip)
      .append('name', dog.name)
      .append('gender', dog.gender)
      .append('breed_id', dog.breed_id.toString())
      .append('color_id', dog.color_id.toString())
      .append('birthdate', '')
      .append('owner_dni', dog.owner_dni)
      .append('owner_fullname', dog.owner_fullname)
      .append('residence', dog.residence);


    // configure headers for form data.
    let httpHeaders: HttpHeaders = new HttpHeaders();
    
    httpHeaders.set('Accept',"application/json");



    // send request
    return this.http
      .post<Dog>(url, httpParams, { headers: httpHeaders })
      //.pipe(catchError(this.handleError<any>('insert', [])));
    //.pipe(catchError(this.handleError));
  }
}
