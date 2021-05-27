import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as usersActions from '@state/users.actions';
import * as usersReducer from '@state/users.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public load = {
    allowToLoad: true,
    offset: 0,
    length: 10,
    total: 0
  }

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(usersReducer.selectLoadInfo).subscribe(load => {
      this.load = {
        ...load
      };
    });
  }

  get allowToLoadMore(): boolean {
    const nextOffset = this.load.offset + this.load.length;

    if (nextOffset < this.load.total) {
      return true;
    } else {
      return false;
    }
  }

  loadMoreUsers(): void {
    const nextOffset = this.load.offset + this.load.length;

    if (nextOffset < this.load.total) {
      this.store.dispatch(usersActions.loadMoreUsers(nextOffset, this.load.length));
    }
  }
}
