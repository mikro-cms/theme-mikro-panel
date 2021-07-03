import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { exhaustMap, catchError, map, tap } from "rxjs/operators";
import { ThemesService } from "@services/themes.service";
import * as exceptionAction from '@state/exception.actions';
import * as themesActions from '@state/themes.actions';

@Injectable()
export class ThemesEffects {
  public processStart$ = createEffect(() => this.action$.pipe(
    ofType(
      themesActions.loadListThemes
    ),
    tap((action) => {
      this.store.dispatch(exceptionAction.openLoading({ message: action.message }));
    })
  ), {
    dispatch: false
  });

  public processDone$ = createEffect(() => this.action$.pipe(
    ofType(
      themesActions.loadListThemes
    ),
    tap(() => {
      this.store.dispatch(exceptionAction.closeLoading());
    })
  ), {
    dispatch: false
  });

  public loadListThemes$ = createEffect(() => this.action$.pipe(
    ofType(themesActions.loadListThemes),
    exhaustMap(action => this.themesService.loadListThemes(action.offset, action.length).pipe(
      map(action => themesActions.loadListThemesSuccess({ themes: action.themes, total: action.total, themeId: action.themeId })),
      catchError(error => of(themesActions.loadListThemesFailed({ message: error })))
    ))
  ));

  constructor(
    private action$: Actions,
    private store: Store,
    private themesService: ThemesService
  ) { }
}
