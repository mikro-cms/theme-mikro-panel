import { createAction, props } from '@ngrx/store';
import { Theme } from '@models/theme.model';

export enum ThemesTypes {
  LOAD_LIST_THEMES = '[Themes] Load List Themes',
  LOAD_LIST_THEMES_SUCCESS = '[Themes] Load List Themes Success',
  LOAD_LIST_THEMES_FAILED = '[Themes] Load List Tehems Failed'
}

export const loadListThemes = createAction(
  ThemesTypes.LOAD_LIST_THEMES,
  (offset: number, length: number, themeId: string) => ({
    offset: offset,
    length: length,
    themeId: themeId,
    message: 'load list themes'
  })
);

export const loadListThemesSuccess = createAction(
  ThemesTypes.LOAD_LIST_THEMES_SUCCESS,
  props<{ themes: Theme[], total: number, themeId: string }>()
);

export const loadListThemesFailed = createAction(
  ThemesTypes.LOAD_LIST_THEMES_FAILED,
  props<{ message: any }>()
);
