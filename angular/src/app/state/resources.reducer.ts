import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { Resource } from '@models/resource.model';
import * as resourcesActions from '@state/resources.actions';

export interface ResourcesState {
  resources: Resource[],
  load: {
    allowToLoad: boolean,
    offset: number,
    length: number
  }
}

export const initialState: ResourcesState = {
  resources: [],
  load: {
    allowToLoad: true,
    offset: 0,
    length: 10
  }
};

const resourceReducer = createReducer(
  initialState,
  on(
    resourcesActions.loadListResources,
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
    resourcesActions.loadListResourcesSuccess,
    (state, action) => ({
      ...state,
      resources: action.resources,
      load: {
        ...state.load,
        allowToLoad: false,
        total: action.total
      }
    })
  ),
  on(
    resourcesActions.editResource,
    (state, action) => {
      const newState = {
        ...state
      };

      newState.resources = newState.resources.map((resource, index) => {
        if (parseInt(action.resource_index) === index) {
          return action.resource;
        } else {
          return resource;
        }
      });

      return newState;
    }
  )
);

export function reducer(state: ResourcesState | undefined, action: Action) {
  return resourceReducer(state, action);
}

const getResourcesFeatureState = createFeatureSelector<ResourcesState>('resources');

export const selectResources = createSelector(
  getResourcesFeatureState,
  (state: ResourcesState) => state.resources
);

export const selectLoad = createSelector(
  getResourcesFeatureState,
  (state: ResourcesState) => state.load
);

export const selectResource = createSelector(
  getResourcesFeatureState,
  (state: ResourcesState, resourceId: any) => {
    for (var resource of state.resources) {
      if (resource.resource_id === resourceId) {
        return resource;
      }
    }

    return null;
  }
);
