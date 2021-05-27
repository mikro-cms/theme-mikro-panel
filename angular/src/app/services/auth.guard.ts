import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as authReducer from '@state/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isLoggedIn!: boolean;

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.store.select(authReducer.selectIsLoggedIn)
      .subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn
      });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLoggedIn) {
      return this.router.createUrlTree(['/users']);
    } else {
      return true;
    }
  }

}
