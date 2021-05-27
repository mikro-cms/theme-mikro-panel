import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@models/user.model';

declare const ENV: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  checkUser(): Observable<any> {
    const checkSessionApiUrl = `${ENV.apiUrl}/user`;

    return this.http.get<User>(checkSessionApiUrl);
  }

  registerNewUser(user: User): Observable<any> {
    const registerApiUrl = `${ENV.apiUrl}/register`;

    return this.http.post<any>(registerApiUrl, {
      'fullname': user.user_fullname,
      'email': user.user_email,
      'username': user.user_username,
      'password': user.user_password
    });
  }

  loginAsUser(user: User): Observable<any> {
    const loginApiUrl = `${ENV.apiUrl}/login`;

    return this.http.post<any>(loginApiUrl, {
      'username': user.user_username,
      'password': user.user_password
    });
  }

  logoutAsUser(): Observable<any> {
    const logoutApiUrl = `${ENV.apiUrl}/logout`;

    return this.http.get<any>(logoutApiUrl);
  }
}
