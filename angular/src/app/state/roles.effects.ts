import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { RolesService } from '@services/roles.service';
import * as exceptionActions from '@state/exception.actions';
import * as rolesActions from '@state/roles.actions';

@Injectable()
export class RolesEffects {
  public processStart$ = createEffect(() => this.action$.pipe(
    ofType(
      rolesActions.loadListRoles
    ),
    tap((action) => {
      this.store.dispatch(exceptionActions.openLoading({ message: action.message }))
    })
  ), {
    dispatch: false
  });

  public processDone$ = createEffect(() => this.action$.pipe(
    ofType(
      rolesActions.loadListRolesSuccess,
      rolesActions.loadListRolesFailed,
    ),
    tap(() => {
      this.store.dispatch(exceptionActions.closeLoading())
    })
  ), {
    dispatch: false
  });

  public loadListRoles$ = createEffect(() => this.action$.pipe(
    ofType(rolesActions.loadListRoles),
    exhaustMap((action) => this.rolesService.loadListRoles(action.offset, action.length).pipe(
      map(action => rolesActions.loadListRolesSuccess({ roles: action.roles, total: action.total })),
      catchError(error => of(rolesActions.loadListRolesFailed({ message: error })))
    ))
  ));

  constructor(
    private action$: Actions,
    private store: Store,
    private rolesService: RolesService
  ) { }
}
