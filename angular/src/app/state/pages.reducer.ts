import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { Page } from '@models/page.model';
import * as pagesActions from '@state/pages.actions';

export interface PagesState {
  pages: Page[],
  load: {
    allowToLoad: boolean,
    offset: number,
    length: number,
    total: number
  }
}

export const initialState: PagesState = {
  pages: [],
  load: {
    allowToLoad: true,
    offset: 0,
    length: 10,
    total: 0
  }
};

const pagesReducer = createReducer(
  initialState,
  on(
    pagesActions.loadListPages,
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
    pagesActions.loadListPagesSuccess,
    (state, action) => ({
      ...state,
      pages: action.pages,
      load: {
        ...state.load,
        allowToLoad: false,
        total: action.total
      }
    })
  ),
  on(
    pagesActions.loadMorePages,
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
    pagesActions.loadMorePagesSuccess,
    (state, action) => ({
      ...state,
      pages: state.pages.concat(action.pages),
      load: {
        ...state.load,
        allowToLoad: false,
        total: (state.load.total + action.total)
      }
    })
  ),
  on(
    pagesActions.addNewPage,
    (state, action) => {
      const newState = {
        ...state
      };

      newState.pages = newState.pages.concat(action.page)

      return newState;
    }
  )
);

export function reducer(state: PagesState | undefined, action: Action) {
  return pagesReducer(state, action);
}

const getPagesFeatureState = createFeatureSelector<PagesState>('pages');

export const selectPages = createSelector(
  getPagesFeatureState,
  (state: PagesState) => state.pages
);

export const selectLoad = createSelector(
  getPagesFeatureState,
  (state: PagesState) => state.load
);

export const selectPage = createSelector(
  getPagesFeatureState,
  (state: PagesState, pageId: any) => {
    for (var page of state.pages) {
      if (page.page_id === pageId) {
        return page;
      }
    }

    return null;
  }
);
