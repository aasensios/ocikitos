import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Str } from '../models/str.model';
import { Observable } from 'rxjs';

@Injectable()
export class StrsService {

/*     private url = 'http://apps.proven.cat/~dawbi1901/api/api/';
 */    private url = 'http://localhost:8000/api/';

  constructor(
    private http: HttpClient
  ) { }

  getStrs(): Observable<Str[]> {
    return this.http.get<Str[]>(this.url+'strs');
  }

  /* insert(dog: Dog): Observable<Dog> {
    const url = `${this.url}dogs`;
    // set query parameters from form data

    let httpParams = new HttpParams()
      .append('chip', dog.chip)
      .append('name', dog.name)
      .append('gender', dog.gender)
      .append('breed_id', dog.breed_id.toString())
      .append('color_id', dog.color_id.toString())
      .append('birthdate', dog.birthdate.toString())
      .append('owner_dni', dog.owner_dni)
      .append('owner_fullname', dog.owner_fullname)
      .append('residence', dog.residence);


    // configure headers for form data.
    let httpHeaders: HttpHeaders = new HttpHeaders();
    



  
    return this.http
      .post<Dog>(url, httpParams, { headers: httpHeaders })
    
  } */
}