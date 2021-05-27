import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare const ENV: any;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  loadListUser(offset: number, length: number): Observable<any> {
    const listUsersApiUrl = `${ENV.apiUrl}/users?offset=${offset}&length=${length}`;

    return this.http.get<any>(listUsersApiUrl);
  }

  deleteUser(userId: string): Observable<any> {
    const deteleteUserApiUrl = `${ENV.apiUrl}/user?user_id=${userId}`;

    return this.http.delete<any>(deteleteUserApiUrl);
  }
}
