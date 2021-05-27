import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { User } from '@models/user.model';
import * as usersActions from '@state/users.actions';

export interface UsersState {
  users: User[],
  load: {
    allowToLoad: boolean,
    offset: number,
    length: number,
    total: number
  }
}

export const initialState: UsersState = {
  users: [],
  load: {
    allowToLoad: true,
    offset: 0,
    length: 10,
    total: 0
  }
};

const usersReducer = createReducer(
  initialState,
  on(
    usersActions.loadListUser,
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
    usersActions.loadListUserSuccess,
    (state, action) => ({
      users: action.users,
      load: {
        ...state.load,
        allowToLoad: false,
        total: action.total
      }
    })
  ),
  on(
    usersActions.loadMoreUsers,
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
    usersActions.loadMoreUsersSuccess,
    (state, action) => ({
      users: state.users.concat(action.users),
      load: {
        ...state.load,
        total: action.total
      }
    })
  ),
  on(
    usersActions.deleteUserSuccess,
    (state, action) => {
      const newState = {
        ...state
      };

      newState.users = newState.users.map((user, index) => {
        if (index === action.user_index) {
          return action.user;
        } else {
          return user;
        }
      });

      return newState;
    }
  ),
  on(
    usersActions.addNewUser,
    (state, action) => {
      const newState = {
        ...state
      };

      newState.users = newState.users.concat(action.user);

      return newState;
    }
  ),
  on(
    usersActions.resetListUsersState,
    () => ({
      ...initialState
    })
  )
);

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action);
}

const getUsersFeatureState = createFeatureSelector<UsersState>('users')

export const selectUsers = createSelector(
  getUsersFeatureState,
  (state: UsersState) => state.users
);

export const selectUser = createSelector(
  getUsersFeatureState,
  (state: UsersState, userIndex: any) => state.users[userIndex]
);

export const selectLoadInfo = createSelector(
  getUsersFeatureState,
  (state: UsersState) => state.load
);
