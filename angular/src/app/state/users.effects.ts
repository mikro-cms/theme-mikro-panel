import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { UsersService } from '@services/users.service';
import * as exceptionActions from '@state/exception.actions';
import * as usersActions from '@state/users.actions';

@Injectable()
export class UsersEffects {
  public processStart$ = createEffect(() => this.action$.pipe(
    ofType(
      usersActions.loadListUser,
      usersActions.loadMoreUsers,
      usersActions.deleteUser
    ),
    tap((action) => {
      this.store.dispatch(exceptionActions.openLoading({ message: action.message }));
    })
  ), {
    dispatch: false
  });

  public processDone$ = createEffect(() => this.action$.pipe(
    ofType(
      usersActions.loadListUserSuccess,
      usersActions.loadListUserFailed,
      usersActions.loadMoreUsersSuccess,
      usersActions.loadMoreUsersFailed,
      usersActions.deleteUserSuccess,
      usersActions.deleteUserFailed
    ),
    tap(() => {
      this.store.dispatch(exceptionActions.closeLoading());
    })
  ), {
    dispatch: false
  });

  public loadUsers$ = createEffect(() => this.action$.pipe(
    ofType(usersActions.loadListUser),
    exhaustMap(action => this.usersService.loadListUser(action.offset, action.length).pipe(
      map(response => usersActions.loadListUserSuccess({ users: response.users, total: response.total })),
      catchError(error => of(usersActions.loadListUserFailed({ message: error })))
    ))
  ));

  public loadMoreUsers$ = createEffect(() => this.action$.pipe(
    ofType(usersActions.loadMoreUsers),
    exhaustMap(action => this.usersService.loadListUser(action.offset, action.length).pipe(
      map(response => usersActions.loadMoreUsersSuccess({ users: response.users, total: response.total })),
      catchError(error => of(usersActions.loadMoreUsersFailed({ message: error })))
    ))
  ));


  public deleteUser$ = createEffect(() => this.action$.pipe(
    ofType(usersActions.deleteUser),
    exhaustMap(action => this.usersService.deleteUser(action.user_id).pipe(
      map(response => usersActions.deleteUserSuccess({
        user_index: action.user_index,
        user: response.user,
        message: response.message
      })),
      catchError(error => of(usersActions.deleteUserFailed({ message: error })))
    ))
  ));

  constructor(
    private store: Store,
    private action$: Actions,
    private usersService: UsersService
  ) { }
}
