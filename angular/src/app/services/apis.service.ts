import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare const ENV: any;

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  constructor(
    private http: HttpClient
  ) { }

  loadListApis(offset: number, length: number): Observable<any> {
    const listApisUrlApi = `${ENV.apiUrl}/apis?offset=${offset}&length=${length}`;

    return this.http.get<any>(listApisUrlApi);
  }
}
