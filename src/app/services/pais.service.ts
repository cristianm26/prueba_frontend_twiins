import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) {

  }
  url = 'http://twiins.test/api'
  getPaises(): Observable<any> {
    return this.http.get(`${this.url}/paises`)
  }

  getPais(id: number): Observable<any> {
    return this.http.get(`${this.url}/paises/${id}`)
  }
  addPais(pais: Pais): Observable<any> {
    return this.http.post(`${this.url}/paises`, pais)
  }

  update(id: number, pais: Pais): Observable<any> {
    return this.http.put(`${this.url}/paises/${id}`, pais)
  }

  deletePais(id: number): Observable<any> {
    return this.http.delete(`${this.url}/paises/${id}`)
  }
}
