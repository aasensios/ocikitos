import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../shared/services/message.service';

import { Dog } from '../shared/dog.model';

import { DOGS } from '../services/mock.dogs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private server = 'http://localhost:8000';
  private serverApp = '/api';
  private servicesPath = '';
  private serviceName = '';
  private body: any;
  private wsUrl: string;
  private httpHeaders: HttpHeaders;

  constructor(private http: HttpClient, private messageService: MessageService) {
    // configure headers for form data.
    this.httpHeaders = new HttpHeaders();

    this.httpHeaders.append('Access', 'application/json');
    this.httpHeaders.append('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImExMTA2MWU5MzYxZGYxZjJmZWRkOGMyMzVmZWZlYzdiNTlhNGRkODM4N2IxMmFmYzE2MDgwYjM4ZDEwNDM0MzBmMjcwZTk4ODRmZDI0NGFjIn0.eyJhdWQiOiIzIiwianRpIjoiYTExMDYxZTkzNjFkZjFmMmZlZGQ4YzIzNWZlZmVjN2I1OWE0ZGQ4Mzg3YjEyYWZjMTYwODBiMzhkMTA0MzQzMGYyNzBlOTg4NGZkMjQ0YWMiLCJpYXQiOjE1NTg0NTM4MDYsIm5iZiI6MTU1ODQ1MzgwNiwiZXhwIjoxNTkwMDc2MjA2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.gq3PAh3pDnjzsdXW1heQugDJp0RNO7gzAbx0N0ZY5GhznBKotCL7dncV92XN4guRpOFnNXElXZLHp3aKUiJQHILJsULuCXzGU67bIehvS4xOadqCKTuJ9Hp10yzBX7CFDg0SkqKvNu8GxPai5Gf5V_ko5FgVadoUSuhm8hjNrd5EydTySmVp9q35jP_d47QNm6ZCUqI7UlNUBO8AavbvIBHoijUYb-dNg8Oh-41ESDGJAS2VAkCnvOB4hIggDOlksjyy6MRqW0Dw1JTIou5OhQuR_3tCWpVasNkjt9uS1-tTXAoOTdpbFV6BbhzLSQGJiEcVycbqiIDG16fKFWuzK_I25iwSFTd7peIR2bAM8uPiVzVIRZCtgELfWbUC80Y-atN7cJA12DdNwdkJU5VuFRaheD9C-0WRpbzIypqai7xWnbSaO6fwNkSutsPEoXY0xexF0VEAxoUfOGG4Pic0xV01YsXgTDzgdqe9FQCKpHkasYI_biv2sLV7fjSNHfwNmA9EYaNM3TvjfgqGPlg4vzKoAFd4z61im7OQiUNuqS4nfJA7kDhJohtK16imDhLdocx0ZG4UXn4K9USXGx7c_cOx3cwDsAfEF7zSHeMBYkuI1j6RQQx6WvgmqxT5fmJIv6NpDbMfTWDVpTMsU-SSDPgIuMzsrEhP5MpY0MmQl0s');


    this.wsUrl = 'http://localhost:8000/api';

    // this.wsUrl = this.server + this.serverApp + this.servicesPath + this.serviceName;
  }

  getAllDogs(): Observable<any> {
    const url = `${this.wsUrl}/dogs`;
    return this.http.get(url)
      .pipe(catchError(this.handleError<any>('getAllDogs', [])));
  }



  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a FriendService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
