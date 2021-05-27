import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { UserService } from '@services/user.service';
import * as exceptionActions from '@state/exception.actions';
import * as userActions from '@state/user.actions';
import * as usersActions from '@state/users.actions';

@Injectable()
export class UserEffects {
  public processStart$ = createEffect(() => this.action$.pipe(
    ofType(
      userActions.addNewUser,
      userActions.editUser
    ),
    tap((action) => {
      this.store.dispatch(exceptionActions.openLoading({ message: action.message }));
    })
  ), {
    dispatch: false
  });

  public processDone$ = createEffect(() => this.action$.pipe(
    ofType(
      userActions.addNewUserSuccess,
      userActions.addNewUserFailed,
      userActions.editUserSuccess,
      userActions.editUserFailed
    ),
    tap((action) => {
      this.store.dispatch(exceptionActions.newMessage({ message: action.message }))
      this.store.dispatch(exceptionActions.closeLoading());
    })
  ), {
    dispatch: false
  });

  public addNewUser$ = createEffect(() => this.action$.pipe(
    ofType(userActions.addNewUser),
    exhaustMap(action => this.userService.addNewUser(action.user).pipe(
      map((response) => {
        this.store.dispatch(usersActions.addNewUser({ user: response.user }));

        return userActions.addNewUserSuccess({ message: response.message })
      }),
      catchError(error => of(userActions.addNewUserFailed({ message: error })))
    ))
  ));

  public editUser$ = createEffect(() => this.action$.pipe(
    ofType(userActions.editUser),
    exhaustMap(action => this.userService.editUser(action.user).pipe(
      map(response => userActions.editUserSuccess({ user: response.user, message: response.message })),
      catchError(error => of(userActions.editUserFailed({ message: error })))
    ))
  ));

  constructor(
    private store: Store,
    private action$: Actions,
    private userService: UserService
  ) { }
}
