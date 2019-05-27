import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Color } from '../models/color.model';
import { Breed } from '../models/breed.model';
import { Observable } from 'rxjs';


@Injectable()
export class TablesService {

  private url = 'http://apps.proven.cat/~dawbi1901/api/api/';

  constructor(
    private http: HttpClient
  ) { }

  getColors(): Observable<Color[]> {
    return this.http.get<Color[]>(this.url+'colors');
  }
  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.url+'breeds');
  }

  
}
