import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { ResourcesService } from '@services/resources.service';
import * as exceptionActions from '@state/exception.actions';
import * as resourcesActions from '@state/resources.actions';

@Injectable()
export class ResourcesEffects {
  public processStart$ = createEffect(() => this.action$.pipe(
    ofType(
      resourcesActions.loadListResources
    ),
    tap((action) => {
      this.store.dispatch(exceptionActions.openLoading({ message: action.message }));
    })
  ), {
    dispatch: false
  });

  public processDone$ = createEffect(() => this.action$.pipe(
    ofType(
      resourcesActions.loadListResourcesSuccess,
      resourcesActions.loadListResourcesFailed
    ),
    tap(() => {
      this.store.dispatch(exceptionActions.closeLoading());
    })
  ), {
    dispatch: false
  });

  public loadListResources = createEffect(() => this.action$.pipe(
    ofType(resourcesActions.loadListResources),
    exhaustMap((action) => this.resourcesService.loadListResources(action.apiId, action.offset, action.length).pipe(
      map(response => resourcesActions.loadListResourcesSuccess({
        resources: response.resources,
        total: response.total
      })),
      catchError(error => of(resourcesActions.loadListResourcesFailed({ message: error })))
    ))
  ));

  constructor(
    private action$: Actions,
    private store: Store,
    private resourcesService: ResourcesService
  ) { }
}
