import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as resourceActions from '@state/resource.actions';

export interface ResourceState {
  role_id: any,
  role_group: string,
  api_method: string,
  api_resource: string
}

export const initialState: ResourceState = {
  role_id: null,
  role_group: '',
  api_method: '',
  api_resource: ''
};

const resourceReducer = createReducer(
  initialState,
  on(
    resourceActions.loadResourceSuccess,
    (state, action) => ({
      ...state,
      ...action.resource
    })
  ),
  on(
    resourceActions.editResourceSuccess,
    (state, action) => ({
      ...state,
      ...action.resource
    })
  )
);

export function reducer(state: ResourceState | undefined, action: Action) {
  return resourceReducer(state, action);
}

const getResourceFeatureState = createFeatureSelector<ResourceState>('resource');

export const selectResource = createSelector(
  getResourceFeatureState,
  (state: ResourceState) => state
);
