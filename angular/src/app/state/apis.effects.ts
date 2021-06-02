import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { ApisService } from '@services/apis.service';
import * as exceptionActions from '@state/exception.actions';
import * as apisActions from '@state/apis.actions';

@Injectable()
export class ApisEffects {
  public processStart$ = createEffect(() => this.action$.pipe(
    ofType(
      apisActions.loadListApis
    ),
    tap((action) => {
      this.store.dispatch(exceptionActions.openLoading({ message: action.message }));
    })
  ), {
    dispatch: false
  });

  public processEnd$ = createEffect(() => this.action$.pipe(
    ofType(
      apisActions.loadListApisSuccess,
      apisActions.loadListApisFailed
    ),
    tap(() => {
      this.store.dispatch(exceptionActions.closeLoading());
    })
  ), {
    dispatch: false
  });

  public loadListApis$ = createEffect(() => this.action$.pipe(
    ofType(apisActions.loadListApis),
    exhaustMap(action => this.apisService.loadListApis(action.offset, action.length).pipe(
      map(response => apisActions.loadListApisSuccess({
        apis: response.apis,
        total: response.total
      })),
      catchError(error => of(apisActions.loadListApisFailed({ message: error })))
    ))
  ));

  constructor(
    private action$: Actions,
    private store: Store,
    private apisService: ApisService
  ) { }
}
