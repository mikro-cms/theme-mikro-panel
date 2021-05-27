import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@models/user.model';
import * as usersActions from '@state/users.actions';
import * as usersReducer from '@state/users.reducer';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  public users$!: Observable<User[]>;
  public load = {
    allowToLoad: true,
    offset: 0,
    length: 10
  }

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(usersReducer.selectUsers));

    this.store.select(usersReducer.selectLoadInfo).subscribe(load => {
      this.load = {
        ...load
      };
    });

    // only load users once
    if (this.load.allowToLoad) {
      this.store.dispatch(usersActions.loadListUser(this.load.offset, this.load.length));
    }
  }

  deleteUser(userIndex: number, userId: any): void {
    this.store.dispatch(usersActions.deleteUser(userIndex, userId));
  }
}
