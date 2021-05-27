import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from '@state/user.actions';

export interface UserState {
  user_fullname: string,
  user_email: string,
  user_username: string,
  user_password: string
}

export const initialState: UserState = {
  user_fullname: '',
  user_email: '',
  user_username: '',
  user_password: ''
};

const userReducer = createReducer(
  initialState,
  on(
    userActions.addNewUser,
    (state, action) => ({
      ...state,
      ...action.user
    })
  ),
  on(
    userActions.editUserSuccess,
    (state, action) => ({
      ...state,
      ...action.user
    })
  ),
  on(
    userActions.resetUserState,
    () => ({
      ...initialState
    })
  )
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
