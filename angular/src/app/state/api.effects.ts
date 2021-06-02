import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { ApiService } from '@services/api.service';
import * as exceptionActions from '@state/exception.actions';
import * as apiActions from '@state/api.actions';

@Injectable()
export class ApiEffects {
  public processStart$ = createEffect(() => this.action$.pipe(
    ofType(
      apiActions.loadApi
    ),
    tap((action) => {
      this.store.dispatch(exceptionActions.openLoading({ message: action.message }));
    })
  ), {
    dispatch: false
  });

  public processDone$ = createEffect(() => this.action$.pipe(
    ofType(
      apiActions.loadApiSuccess,
      apiActions.loadApiSuccess
    ),
    tap(() => {
      this.store.dispatch(exceptionActions.closeLoading());
    })
  ), {
    dispatch: false
  });

  public loadApi$ = createEffect(() => this.action$.pipe(
    ofType(apiActions.loadApi),
    exhaustMap(action => this.apiService.loadApi(action.apiId).pipe(
      map((response) => apiActions.loadApiSuccess({ api: response.api })),
      catchError(error => of(apiActions.loadApiFailed({ message: error })))
    ))
  ));

  constructor(
    private action$: Actions,
    private store: Store,
    private apiService: ApiService
  ) { }
}
