import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare const ENV: any;

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  constructor(
    private http: HttpClient
  ) { }

  loadListResources(apiId: string, offset: number, length: number): Observable<any> {
    const listResourcesApiUrl = `${ENV.apiUrl}/resources?api_id=${apiId}&offset=${offset}&length=${length}`;

    return this.http.get<any>(listResourcesApiUrl);
  }
}
