import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as apiActions from '@state/api.actions';

export interface ApiState {
  api_id: string,
  api_name: string,
  api_version: string,
  api_author: string,
  api_url: string
}

export const initialState: ApiState = {
  api_id: '',
  api_name: '',
  api_version: '',
  api_author: '',
  api_url: ''
};

const apiReducer = createReducer(
  initialState,
  on(
    apiActions.loadApiSuccess,
    (state, action) => ({
      ...state,
      ...action.api
    })
  )
);

export function reducer(state: ApiState | undefined, action: Action) {
  return apiReducer(state, action);
}

const getApiFeatureState = createFeatureSelector<ApiState>('api');

export const selectApi = createSelector(
  getApiFeatureState,
  (state: ApiState) => state
);
