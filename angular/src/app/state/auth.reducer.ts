import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';
import * as authActions from '@state/auth.actions';

export interface AuthState {
  user_fullname: string,
  user_email: string,
  user_username: string,
  user_password: string,
  isLoggedIn: boolean
}

export const initialState: AuthState = {
  user_fullname: '',
  user_email: '',
  user_username: '',
  user_password: '',
  isLoggedIn: false
};

const authReducer = createReducer(
  initialState,
  on(
    authActions.registerNewUser,
    (state, action) => ({
      ...state,
      ...action.user
    })
  ),
  on(
    authActions.loginAsUser,
    (state, action) => ({
      ...state,
      ...action.user
    })),
  on(
    authActions.loginAsUserSuccess,
    (state) => ({
      ...state,
      isLoggedIn: true
    })),
  on(
    authActions.loginAsUserFailed,
    (state) => ({
      ...state,
      isLoggedIn: false
    })),
  on(
    authActions.hasBeenLoginSuccess,
    (state, action) => ({
      ...state,
      ...action.user,
      isLoggedIn: true
    })
  ),
  on(
    authActions.hasBeenLoginFailed,
    (state) => ({
      ...state,
      isLoggedIn: false
    })
  ),
  on(
    authActions.logoutAsUserSuccess,
    (state) => ({
      ...initialState
    })
  ),
  on(
    authActions.resetAuthState,
    () => ({
      ...initialState
    })
  )
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const selectIsLoggedIn = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.isLoggedIn
);
