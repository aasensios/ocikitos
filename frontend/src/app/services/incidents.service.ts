import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Incident } from '../models/incident'
import { Observable } from 'rxjs'
import { API } from './api.constants'
import { OcikitosResponse } from 'src/app/models/response'

@Injectable()
export class IncidentsService {
  constructor(private http: HttpClient) {}

  getIncidents(): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/incidents`
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.get<OcikitosResponse>(url, options)
  }

  getIncident(id: number): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/incidents/${id}`
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.get<OcikitosResponse>(url, options)
  }

  create(incident: Incident): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/incidents`
    const body = incident
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.post<OcikitosResponse>(url, body, options)
  }

  update(incident: Incident): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/incidents/${incident.id}`
    const body = incident
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.put<OcikitosResponse>(url, body, options)
  }

  delete(incident: Incident): Observable<OcikitosResponse> {
    const url = `${API.API_URL}/incidents/${incident.id}`
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.delete<OcikitosResponse>(url, options)
  }
}
