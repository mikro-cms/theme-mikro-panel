import { createAction, props } from '@ngrx/store';
import { User } from '@models/user.model';

export enum UserTypes {
  ADD_NEW_USER = '[User] Add New User',
  ADD_NEW_USER_SUCCESS = '[User] Add New User Success',
  ADD_NEW_USER_FAILED = '[User] Add New User Failed',
  EDIT_USER = '[User] Edit User',
  EDIT_USER_SUCCESS = '[User] Edit User Success',
  EDIT_USER_FAILED = '[User] Edit User Failed',
  RESET_USER_STATE = '[User] Reset User State'
}

export const addNewUser = createAction(
  UserTypes.ADD_NEW_USER,
  (user: User) => ({
    user: user,
    message: 'add new user'
  })
);

export const addNewUserSuccess = createAction(
  UserTypes.ADD_NEW_USER_SUCCESS,
  props<{ message: string }>()
);

export const addNewUserFailed = createAction(
  UserTypes.ADD_NEW_USER_FAILED,
  props<{ message: any }>()
);

export const editUser = createAction(
  UserTypes.EDIT_USER,
  (user: User) => ({
    user: user,
    message: 'edit user'
  })
);

export const editUserSuccess = createAction(
  UserTypes.EDIT_USER_SUCCESS,
  props<{ user: User, message: string }>()
);

export const editUserFailed = createAction(
  UserTypes.EDIT_USER_FAILED,
  props<{ message: any }>()
);

export const resetUserState = createAction(
  UserTypes.RESET_USER_STATE
);
