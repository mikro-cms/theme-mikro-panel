import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { PagesService } from '@services/pages.service';
import * as exceptionActions from '@state/exception.actions';
import * as pagesActions from '@state/pages.actions';

@Injectable()
export class PagesEffects {
  public processStart$ = createEffect(() => this.action$.pipe(
    ofType(
      pagesActions.loadListPages,
      pagesActions.loadMorePages
    ),
    tap((action) => {
      return this.store.dispatch(exceptionActions.openLoading({ message: action.message }));
    })
  ), {
    dispatch: false
  });

  public processDone$ = createEffect(() => this.action$.pipe(
    ofType(
      pagesActions.loadListPagesSuccess,
      pagesActions.loadListPagesFailed,
      pagesActions.loadMorePagesSuccess,
      pagesActions.loadMorePagesFailed
    ),
    tap(() => {
      return this.store.dispatch(exceptionActions.closeLoading());
    })
  ), {
    dispatch: false
  });

  public loadListPages$ = createEffect(() => this.action$.pipe(
    ofType(pagesActions.loadListPages),
    exhaustMap(action => this.pagesService.loadListPages(action.offset, action.length).pipe(
      map(response => pagesActions.loadListPagesSuccess({ pages: response.pages, total: response.total })),
      catchError(error => of(pagesActions.loadListPagesFailed({ message: error })))
    ))
  ));

  public loadMorePages$ = createEffect(() => this.action$.pipe(
    ofType(pagesActions.loadMorePages),
    exhaustMap(action => this.pagesService.loadListPages(action.offset, action.length).pipe(
      map(response => pagesActions.loadMorePagesSuccess({ pages: response.pages, total: response.total })),
      catchError(error => of(pagesActions.loadMorePagesFailed({ message: error })))
    ))
  ));

  constructor(
    private store: Store,
    private action$: Actions,
    private pagesService: PagesService
  ) { }
}
