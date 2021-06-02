import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { Api } from '@models/api.model';
import * as apisActions from '@state/apis.actions';

export interface ApisState {
  apis: Api[],
  load: {
    allowToLoad: boolean,
    offset: number,
    length: number,
    total: number
  }
}

export const initialState: ApisState = {
  apis: [],
  load: {
    allowToLoad: true,
    offset: 0,
    length: 10,
    total: 0
  }
};

export const apisReducer = createReducer(
  initialState,
  on(
    apisActions.loadListApis,
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
    apisActions.loadListApisSuccess,
    (state, action) => ({
      ...state,
      apis: action.apis,
      load: {
        ...state.load,
        allowToLoad: false,
        total: action.total
      }
    })
  )
);

export function reducer(state: ApisState | undefined, action: Action) {
  return apisReducer(state, action);
}

const getApisFeatureState = createFeatureSelector<ApisState>('apis');

export const selectApis = createSelector(
  getApisFeatureState,
  (state: ApisState) => state.apis
);

export const selectLoad = createSelector(
  getApisFeatureState,
  (state: ApisState) => state.load
);

export const selectApi = createSelector(
  getApisFeatureState,
  (state: ApisState, apiId: any) => {
    for (var api of state.apis) {
      if (api.api_id === apiId) {
        return api;
      }
    }

    return null;
  }
);
