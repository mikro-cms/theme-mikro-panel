import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from 'rxjs';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { PagesService } from '@services/pages.service';
import * as exceptionActions from '@state/exception.actions';
import * as actionsPages from '@state/pages.action';

@Injectable()
export class PagesEffects {
  public processStart$ = createEffect(() => this.action$.pipe(
    ofType(
      actionsPages.loadListPages,
      actionsPages.loadMorePages
    ),
    tap((action) => {
      return this.store.dispatch(exceptionActions.openLoading({ message: action.message }));
    })
  ), {
    dispatch: false
  });

  public processDone$ = createEffect(() => this.action$.pipe(
    ofType(
      actionsPages.loadListPagesSuccess,
      actionsPages.loadListPagesFailed,
      actionsPages.loadMorePagesSuccess,
      actionsPages.loadMorePagesFailed
    ),
    tap(() => {
      return this.store.dispatch(exceptionActions.closeLoading());
    })
  ), {
    dispatch: false
  });

  public loadListPages$ = createEffect(() => this.action$.pipe(
    ofType(actionsPages.loadListPages),
    exhaustMap(action => this.pagesService.loadListPages(action.offset, action.length).pipe(
      map(action => actionsPages.loadListPagesSuccess({ pages: action.pages, total: action.total })),
      catchError(error => of(actionsPages.loadListPagesFailed({ message: error })))
    ))
  ));

  public loadMorePages$ = createEffect(() => this.action$.pipe(
    ofType(actionsPages.loadMorePages),
    exhaustMap(action => this.pagesService.loadListPages(action.offset, action.length).pipe(
      map(action => actionsPages.loadMorePagesSuccess({ pages: action.pages, total: action.total })),
      catchError(error => of(actionsPages.loadMorePagesFailed({ message: error })))
    ))
  ));

  constructor(
    private store: Store,
    private action$: Actions,
    private pagesService: PagesService
  ) { }
}
