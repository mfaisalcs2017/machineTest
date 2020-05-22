import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  baseUrl: string = '';
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://vast-shore-74260.herokuapp.com/banks?city=';
  }
  getOne(endpoint, city, options?): Observable<any> {
    return this.httpClient.get(endpoint + city, options);
  }
}
