import { createAction, props } from '@ngrx/store';
import { User } from '@models/user.model';

export enum AuthTypes {
  REGISTER_NEW_USER = '[Auth] Register New User',
  REGISTER_NEW_USER_SUCCESS = '[Auth] Register New User Success',
  REGISTER_NEW_USER_FAILED = '[Auth] Register New User Failed',
  LOGIN_AS_USER = '[Auth] Login As User',
  LOGIN_AS_USER_SUCCESS = '[Auth] Login As User Success',
  LOGIN_AS_USER_FAILED = '[Auth] Login As User Failed',
  RESET_AUTH_STATE = '[Auth] Reset Auth State',
  HAS_BEEN_LOGIN = '[Auth] Has Been Login',
  HAS_BEEN_LOGIN_SUCCESS = '[Auth] Has Been Login Success',
  HAS_BEEN_LOGIN_FAILED = '[Auth] Has Been Login Failed',
  LOGOUT_AS_USER = '[Auth] Logout As User',
  LOGOUT_AS_USER_SUCCESS = '[Auth] Logout As User Sucess',
  LOGOUT_AS_USER_FAILED = '[Auth] Logout As User Failed'
}

export const registerNewUser = createAction(
  AuthTypes.REGISTER_NEW_USER,
  (user: User) => ({
    user: user,
    message: 'register as new user'
  })
);

export const registerNewUserSuccess = createAction(
  AuthTypes.REGISTER_NEW_USER_SUCCESS,
  props<{ message: string }>()
);

export const registerNewUserFailed = createAction(
  AuthTypes.REGISTER_NEW_USER_FAILED,
  props<{ message: any }>()
);

export const loginAsUser = createAction(
  AuthTypes.LOGIN_AS_USER,
  (user: User) => ({
    user: user,
    message: 'login as new user ...'
  })
);

export const loginAsUserSuccess = createAction(
  AuthTypes.LOGIN_AS_USER_SUCCESS,
  props<{ message: string, token: string }>()
);

export const loginAsUserFailed = createAction(
  AuthTypes.LOGIN_AS_USER_FAILED,
  props<{ message: any }>()
);

export const hasBeenLogin = createAction(
  AuthTypes.HAS_BEEN_LOGIN,
  () => ({
    message: 'get active user data'
  })
);

export const hasBeenLoginSuccess = createAction(
  AuthTypes.HAS_BEEN_LOGIN_SUCCESS,
  props<{ user: User, message: string }>()
);

export const hasBeenLoginFailed = createAction(
  AuthTypes.HAS_BEEN_LOGIN_FAILED,
  props<{ message: any }>()
);

export const logoutAsUser = createAction(
  AuthTypes.LOGOUT_AS_USER,
  () => ({
    message: 'logout as user'
  })
);

export const logoutAsUserSuccess = createAction(
  AuthTypes.LOGOUT_AS_USER_SUCCESS,
  props<{ message: string }>()
);

export const logoutAsUserFailed = createAction(
  AuthTypes.LOGOUT_AS_USER_FAILED,
  props<{ message: any }>()
);

export const resetAuthState = createAction(
  AuthTypes.RESET_AUTH_STATE
);
