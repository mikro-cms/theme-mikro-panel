import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare const ENV: any;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  loadApi(apiId: any): Observable<any> {
    const apiApiUrl = `${ENV.apiUrl}/api?api_id=${apiId}`;

    return this.http.get<any>(apiApiUrl);
  }
}
