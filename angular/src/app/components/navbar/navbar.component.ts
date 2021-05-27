import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as authActions from '@state/auth.actions';
import * as authReducer from '@state/auth.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user_fullname!: string;
  public user_username!: string;

  constructor(
    private store: Store<{ auth: authReducer.AuthState }>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.user_fullname = state.auth.user_fullname;
      this.user_username = state.auth.user_username;
    });
  }

  logout(): void {
    this.store.dispatch(authActions.logoutAsUser());
  }
}
