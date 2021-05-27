import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '@services/auth.service';
import * as exceptionActions from '@state/exception.actions';
import * as authActions from '@state/auth.actions';

@Injectable()
export class AuthEffects {
  public processStart$ = createEffect(() => this.action$.pipe(
    ofType(
      authActions.registerNewUser,
      authActions.loginAsUser,
      authActions.hasBeenLogin
    ),
    tap((action) => {
      this.store.dispatch(exceptionActions.openLoading({ message: action.message }));
    })
  ), {
    dispatch: false
  });

  public processDone$ = createEffect(() => this.action$.pipe(
    ofType(
      authActions.registerNewUserSuccess,
      authActions.registerNewUserFailed,
      authActions.loginAsUserSuccess,
      authActions.loginAsUserFailed,
      authActions.hasBeenLoginSuccess,
      authActions.hasBeenLoginFailed
    ),
    tap((action) => {
      this.store.dispatch(exceptionActions.newMessage({ message: action.message }));
      this.store.dispatch(exceptionActions.closeLoading());
    })
  ), {
    dispatch: false
  });

  public registerNewUser$ = createEffect(() => this.action$.pipe(
    ofType(authActions.registerNewUser),
    exhaustMap(action => this.authService.registerNewUser(action.user).pipe(
      map(response => authActions.registerNewUserSuccess({ message: response.message })),
      catchError(error => of(authActions.registerNewUserFailed({ message: error })))
    ))
  ));

  public loginAsUser$ = createEffect(() => this.action$.pipe(
    ofType(authActions.loginAsUser),
    exhaustMap(action => this.authService.loginAsUser(action.user).pipe(
      map((response) => {
        window.localStorage.setItem('token', response.token);

        return authActions.loginAsUserSuccess(response);
      }),
      catchError(error => of(authActions.loginAsUserFailed({ message: error })))
    )
  )));

  public loginAsUserSuccess$ = createEffect(() => this.action$.pipe(
    ofType(authActions.loginAsUserSuccess),
    tap(() => this.router.navigate(['/users']))
  ), {
    dispatch: false
  });

  public hasBeenLoginFailed$ = createEffect(() => this.action$.pipe(
    ofType(authActions.hasBeenLoginFailed),
    tap(() => this.router.navigate(['/login']))
  ), {
    dispatch: false
  });

  public logoutAsUser$ = createEffect(() => this.action$.pipe(
    ofType(authActions.logoutAsUser),
    exhaustMap(() => this.authService.logoutAsUser().pipe(
      map(response => authActions.logoutAsUserSuccess({ message: response.message })),
      catchError(error => of(authActions.logoutAsUserFailed({ message: error })))
    ))
  ));

  public logoutAsUserSuccess$ = createEffect(() => this.action$.pipe(
    ofType(authActions.logoutAsUserSuccess),
    tap(() => this.router.navigate(['/login']))
  ), {
    dispatch: false
  });

  constructor(
    private store: Store,
    private action$: Actions,
    private router: Router,
    private authService: AuthService
  ) { }
};
