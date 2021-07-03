import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { Theme } from '@models/theme.model';
import * as themesActions from '@state/themes.actions';

export interface ThemesState {
  themes: Theme[],
  load: {
    allowToLoad: boolean,
    offset: number,
    length: number,
    total: number
  }
};

export const initialState: ThemesState = {
  themes: [],
  load: {
    allowToLoad: true,
    offset: 0,
    length: 10,
    total: 0
  }
};

const themesReducer = createReducer(
  initialState,
  on(
    themesActions.loadListThemes,
    (state, action) => ({
      ...state,
      load: {
        ...state.load,
        offset: action.offset,
        length: action.length
      }
    })
  ),
  on(
    themesActions.loadListThemesSuccess,
    (state, action) => ({
      ...state,
      themes: state.themes.concat(action.themes),
      load: {
        ...state.load,
        allowToLoad: false,
        total: (state.load.total + action.total)
      }
    })
  )
);

export function reducer(state: ThemesState | undefined, action: Action) {
  return themesReducer(state, action);
}

const getThemesFeatureState = createFeatureSelector<ThemesState>('themes');

export const selectThemes = createSelector(
  getThemesFeatureState,
  (state: ThemesState) => state.themes
);

export const selectLoad = createSelector(
  getThemesFeatureState,
  (state: ThemesState) => state.load
);

export const selectVariants = createSelector(
  getThemesFeatureState,
  (state: ThemesState, themeId: any) => {
    let variants: string[] = [];

    for (var theme of state.themes) {
      if (theme.theme_id === themeId) {
        variants = theme.theme_components;

        break;
      }
    }

    return variants;
  }
);
