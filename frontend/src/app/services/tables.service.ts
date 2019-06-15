import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from '../models/color.model';
import { Breed } from '../models/breed.model';
import { Observable } from 'rxjs';
import { API } from './api.constants';

@Injectable()
export class TablesService {

  constructor(
    private http: HttpClient
  ) { }

  getColors(): Observable<Color[]> {
    return this.http.get<Color[]>(`${API.API_URL}/colors`);
  }
  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${API.API_URL}/breeds`);
  }

}
