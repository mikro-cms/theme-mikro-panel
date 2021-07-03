import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as pageActions from '@state/page.actions';

export interface PageState {
  page_id: string,
  role_id: string,
  role_group: string,
  page_title: string,
  page_url: string,
  theme_id: string,
  variant: string
}

export const initialState: PageState = {
  page_id: '',
  role_id: '',
  role_group: '',
  page_title: '',
  page_url: '',
  theme_id: '',
  variant: ''
};

const pageReducer = createReducer(
  initialState,
  on(
    pageActions.loadPageSuccess,
    (state, action) => ({
      ...state,
      ...action.page
    })
  ),
  on(
    pageActions.addNewPage,
    (state, action) => ({
      ...state,
      ...action.page
    })
  ),
  on(
    pageActions.editPageSuccess,
    (state, action) => ({
      ...state,
      ...action.page
    })
  )
);

export function reducer(state: PageState | undefined, action: Action) {
  return pageReducer(state, action);
}

const getPageFeatureState = createFeatureSelector<PageState>('page');

export const selectPage = createSelector(
  getPageFeatureState,
  (state: PageState) => state
);
