import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '@models/user.model';
import * as exceptionActions from '@state/exception.actions';
import * as userActions from '@state/user.actions';
import * as usersReducer from '@state/users.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public data!: any;
  public title!: string;
  public initialUser!: any;
  public user_id!: string;
  public user_fullname!: string;
  public user_email!: string;
  public user_username!: string;
  public user_password!: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(exceptionActions.resetExceptionState());
    this.store.dispatch(userActions.resetUserState());

    this.route.data.subscribe(data => {
      this.data = data;
    });

    if (this.data.type === 'add') {
      this.title = 'Add New User';
    } else {
      this.title = 'Edit User';

      this.loadUserData();
    }
  }

  loadUserData(): void {
    const userIndex = this.route.snapshot.paramMap.get('userIndex');

    this.store.select(usersReducer.selectUser, userIndex).subscribe((user: any) => {
      this.initialUser = user;
      this.user_id = user.user_id;
      this.user_fullname = user.user_fullname;
      this.user_email = user.user_email;
      this.user_username = user.user_username;
    });
  }

  saveUser(): void {
    if (this.data.type === 'add') {
      this.addNewUser();
    } else if (this.data.type === 'edit') {
      this.editUser();
    }
  }

  addNewUser(): void {
    const user: User = {
      user_fullname: this.user_fullname,
      user_email: this.user_email,
      user_username: this.user_username,
      user_password: this.user_password
    };

    this.store.dispatch(userActions.addNewUser(user));
  }

  editUser(): void {
    const user: User = {
      user_id: this.user_id
    };

    if (this.user_fullname !== this.initialUser.user_fullname) {
      user.user_fullname = this.user_fullname;
    }

    if (this.user_email !== this.initialUser.user_email) {
      user.user_email = this.user_email;
    }

    if (this.user_username !== this.initialUser.user_username) {
      user.user_username = this.user_username;
    }

    if (typeof this.user_password !== 'undefined') {
      user.user_password = this.user_password;
    }

    this.store.dispatch(userActions.editUser(user));
  }
}
