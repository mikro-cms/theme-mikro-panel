import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { Role } from '@models/role.model';
import * as rolesActions from '@state/roles.actions';

export interface RolesState {
  roles: Role[],
  load: {
    offset: number,
    length: number,
    total: number
  }
}

export const initialState: RolesState = {
  roles: [],
  load: {
    offset: 0,
    length: 10,
    total: 0
  }
};

const rolesReducer = createReducer(
  initialState,
  on(
    rolesActions.loadListRoles,
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
    rolesActions.loadListRolesSuccess,
    (state, action) => ({
      ...state,
      roles: action.roles,
      load: {
        ...state.load,
        total: action.total
      }
    })
  )
);

export function reducer(state: RolesState | undefined, action: Action) {
  return rolesReducer(state, action);
}

const getRolesFeatureState = createFeatureSelector<RolesState>('roles');

export const selectRoles = createSelector(
  getRolesFeatureState,
  (state: RolesState) => state.roles
);

export const selectLoad = createSelector(
  getRolesFeatureState,
  (state: RolesState) => state.load
);
