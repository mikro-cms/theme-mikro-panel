import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { PageService } from '@services/page.service';
import * as exceptionActions from '@state/exception.actions';
import * as pageActions from '@state/page.actions';
import * as pagesActions from '@state/pages.actions';

@Injectable()
export class PageEffects {
  public processStart$ = createEffect(() => this.action$.pipe(
    ofType(
      pageActions.loadPage,
      pageActions.addNewPage,
      pageActions.editPage
    ),
    tap((action) => {
      this.store.dispatch(exceptionActions.openLoading({ message: action.message }));
    })
  ), {
    dispatch: false
  });

  public processDone$ = createEffect(() => this.action$.pipe(
    ofType(
      pageActions.loadPageSuccess,
      pageActions.loadPageFailed,
      pageActions.addNewPageSuccess,
      pageActions.addNewPageFailed,
      pageActions.editPageSuccess,
      pageActions.editPageFailed
    ),
    tap((action: any) => {
      this.store.dispatch(exceptionActions.newMessage({ message: action.message }))
      this.store.dispatch(exceptionActions.closeLoading())
    })
  ), {
    dispatch: false
  });

  public loadPage$ = createEffect(() => this.action$.pipe(
    ofType(pageActions.loadPage),
    exhaustMap(action => this.pageService.loadPage(action.page_id).pipe(
      map(response => pageActions.loadPageSuccess({ page: response.page })),
      catchError(error => of(pageActions.loadPageFailed({ message: error })))
    ))
  ));

  public addNewPage$ = createEffect(() => this.action$.pipe(
    ofType(pageActions.addNewPage),
    exhaustMap(action => this.pageService.addNewPage(action.page).pipe(
      map((response) => {
        this.store.dispatch(pagesActions.addNewPage({ page: response.page }));

        return pageActions.addNewPageSuccess({ message: response.message })
      }),
      catchError(error => of(pageActions.addNewPageFailed({ message: error })))
    ))
  ));

  public editPage$ = createEffect(() => this.action$.pipe(
    ofType(pageActions.editPage),
    exhaustMap(action => this.pageService.editPage(action.page).pipe(
      map(response => pageActions.editPageSuccess({ page: response.page, message: response.message })),
      catchError(error => of(pageActions.editPageFailed({ message: error })))
    ))
  ));

  constructor(
    private action$: Actions,
    private store: Store,
    private pageService: PageService
  ) { }
}
