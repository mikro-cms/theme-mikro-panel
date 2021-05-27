import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '@services/auth.service';
import * as authActions from '@state/auth.actions';
import * as authReducer from '@state/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  private isLoggedIn!: boolean;

  constructor(
    private store: Store,
    private authService: AuthService
  ) {
    this.store.select(authReducer.selectIsLoggedIn)
      .subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.store.dispatch(authActions.hasBeenLogin());

    return this.authService.checkUser().pipe(
      map(response => {console.log(response);
        this.store.dispatch(authActions.hasBeenLoginSuccess({
          user: response.user,
          message: response.message
        }));

        return true;
      }),
      catchError(error => {
        this.store.dispatch(authActions.hasBeenLoginFailed({
          message: error
        }));

        return of(false);
      })
    );
  }
}
