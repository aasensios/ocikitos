import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Infraction } from '../models/infraction'
import { Observable } from 'rxjs'
import { API } from './api.constants'
import { OcikitosResponse } from 'src/app/models/response'

@Injectable()
export class InfractionsService {
  constructor(private http: HttpClient) {}

  getInfractions(): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/infractions`
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.get<OcikitosResponse>(url, options)
  }

  create(infraction: Infraction): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/infractions`
    const body = infraction
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.post<OcikitosResponse>(url, body, options)
  }

  update(infraction: Infraction): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/infractions/${infraction.id}`
    const body = infraction
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.put<OcikitosResponse>(url, body, options)
  }

  delete(infraction: Infraction): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/infractions/${infraction.id}`
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.delete<OcikitosResponse>(url, options)
  }
}
