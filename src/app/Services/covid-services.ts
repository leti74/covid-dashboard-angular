import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private readonly API_URL = 'https://api.covidtracking.com/v1';

  constructor(private http: HttpClient) {}

  // Get USA total stats
  getUSA(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/us/current.json`);
  }

  // Get all states current stats
  getStates(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/states/current.json`);
  }

  // Get single state stats
  getState(code: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/states/${code}/current.json`);
  }

}
