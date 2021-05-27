import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '@models/user.model';
import * as exceptionActions from '@state/exception.actions';
import * as authActions from '@state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user_username!: string;
  public user_password!: string;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(exceptionActions.resetExceptionState());
    this.store.dispatch(authActions.resetAuthState());
  }

  login() {
    const user: User = {
      user_username: this.user_username,
      user_password: this.user_password
    };

    this.store.dispatch(authActions.loginAsUser(user));
  }
}
