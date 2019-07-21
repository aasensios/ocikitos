import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Dog, Color, Breed } from 'src/app/models/dog'
import { Observable } from 'rxjs'
import { API } from './api.constants'
import { OcikitosResponse } from 'src/app/models/response'

@Injectable()
export class DogsService {
  constructor(private http: HttpClient) {}

  getColors(): Observable<Color[]> {
    return this.http.get<Color[]>(`${API.API_URL}/colors`)
  }

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${API.API_URL}/breeds`)
  }

  getDogs(): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/dogs`
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.get<OcikitosResponse>(url, options)
  }

  create(dog: Dog): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/dogs`
    const body = dog
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.post<OcikitosResponse>(url, body, options)
  }

  getOneDog(id: number): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/dogs/${id}`
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.get<OcikitosResponse>(url, options)
  }

  update(dog: Dog): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/dogs/${dog.id}`
    const body = dog
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.put<OcikitosResponse>(url, body, options)
  }

  delete(dog: Dog): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/dogs/${dog.id}`
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.delete<OcikitosResponse>(url, options)
  }
}
