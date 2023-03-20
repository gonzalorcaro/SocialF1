import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIF1Service {

  private apiUltimaCarrera = 'https://ergast.com/api/f1/current/last/results.json';
  private apiCalendario = 'https://ergast.com/api/f1/current.json';
  private apiClasfPiloto = 'https://ergast.com/api/f1/current/driverStandings.json';
  private apiClasfConstructores = 'https://ergast.com/api/f1/current/constructorStandings.json';

  constructor(private http: HttpClient) { }

  getCalendario() {
    return this.http.get(this.apiCalendario);
  }

  getUltimaCarrera() {
    return this.http.get(this.apiUltimaCarrera);
  }

  getClasfPilotos() {
    return this.http.get(this.apiClasfPiloto);
  }

  getClasfConstructores() {
    return this.http.get(this.apiClasfConstructores);
  }

}
