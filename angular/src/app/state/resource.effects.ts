import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { ResourceService } from '@services/resource.service';
import * as exceptionActions from '@state/exception.actions';
import * as resourceActions from '@state/resource.actions';
import * as resourcesActions from '@state/resources.actions';

@Injectable()
export class ResourceEffects {
  public processStart$ = createEffect(() => this.action$.pipe(
    ofType(
      resourceActions.loadResource,
      resourceActions.editResource
    ),
    tap((action) => {
      this.store.dispatch(exceptionActions.openLoading({ message: action.message }));
    })
  ), {
    dispatch: false
  });

  public processDone$ = createEffect(() => this.action$.pipe(
    ofType(
      resourceActions.loadResourceSuccess,
      resourceActions.loadResourceFailed,
      resourceActions.editResourceSuccess,
      resourceActions.editResourceFailed
    ),
    tap((action: any) => {
      this.store.dispatch(exceptionActions.newMessage({ message: action.message }));
      this.store.dispatch(exceptionActions.closeLoading());
    })
  ), {
    dispatch: false
  });

  public loadResource$ = createEffect(() => this.action$.pipe(
    ofType(resourceActions.loadResource),
    exhaustMap(action => this.resourceService.loadResource(action.resourceId).pipe(
      map(response => resourceActions.loadResourceSuccess({ resource: response.resource })),
      catchError(error => of(resourceActions.loadResourceFailed({ message: error })))
    ))
  ));

  public editResource$ = createEffect(() => this.action$.pipe(
    ofType(resourceActions.editResource),
    exhaustMap(action => this.resourceService.editResource(action.resource).pipe(
      map((response) => {
        this.store.dispatch(resourcesActions.editResource({
          resource_index: action.resource_index,
          resource: response.resource
        }));

        return resourceActions.editResourceSuccess({
          resource: response.resource,
          message: response.message
        });
      }),
      catchError(error => of(resourceActions.editResourceFailed({ message: error })))
    ))
  ));

  constructor(
    private action$: Actions,
    private store: Store,
    private resourceService: ResourceService
  ) { }
}
