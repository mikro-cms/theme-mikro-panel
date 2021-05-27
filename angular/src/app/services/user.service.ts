import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@models/user.model';

declare const ENV: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  addNewUser(user: User): Observable<any> {
    const addNewUserApiUrl = `${ENV.apiUrl}/user`;

    return this.http.post<any>(addNewUserApiUrl, {
      'fullname': user.user_fullname,
      'email': user.user_email,
      'username': user.user_username,
      'password': user.user_password
    });
  }

  editUser(user: User): Observable<any> {
    const editUserApiUrl = `${ENV.apiUrl}/user`;
    const editedUser: any = {};

    editedUser.user_id = user.user_id;

    if (user.user_fullname) editedUser.fullname = user.user_fullname;
    if (user.user_email) editedUser.email = user.user_email;
    if (user.user_username) editedUser.fullname = user.user_username;
    if (user.user_password) editedUser.fullname = user.user_password;

    return this.http.put<any>(editUserApiUrl, editedUser);
  }
}
