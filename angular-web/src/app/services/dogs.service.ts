import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
