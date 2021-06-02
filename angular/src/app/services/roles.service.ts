import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare const ENV: any;

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  constructor(
    private http: HttpClient
  ) { }

  loadListRoles(offset: number, length: number): Observable<any> {
    const listRolesApiUrl = `${ENV.apiUrl}/roles?offset=${offset}&length=${length}`;

    return this.http.get<any>(listRolesApiUrl);
  }
}
