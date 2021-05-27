import { createAction, props } from '@ngrx/store';
import { User } from '@models/user.model';

export enum UsersTypes {
  LOAD_LIST_USERS = '[Users] Load List Users',
  LOAD_LIST_USERS_SUCCESS = '[Users] Load List Users Success',
  LOAD_LIST_USERS_FAILED = '[Users] Load List Users Failed',
  LOAD_MORE_USERS = '[Users] Load More Users',
  LOAD_MORE_USERS_SUCCESS = '[Users] Load More Users Success',
  LOAD_MORE_USERS_FAILED = '[Users] Load More Users Failed',
  DELETE_USER = '[Users] Delete User',
  DELETE_USER_SUCCESS = '[Users] Delete User Success',
  DELETE_USER_FAILED = '[Users] Delete User Failed',
  ADD_NEW_USER = '[Users] Add New User',
  RESET_LIST_USERS_STATE = '[Users] Reset Users State'
}

export const loadListUser = createAction(
  UsersTypes.LOAD_LIST_USERS,
  (offset: number, length: number) => ({
    offset: offset,
    length: length,
    message: 'load list users'
  })
);

export const loadListUserSuccess = createAction(
  UsersTypes.LOAD_LIST_USERS_SUCCESS,
  props<{ users: [], total: number }>()
);

export const loadListUserFailed = createAction(
  UsersTypes.LOAD_LIST_USERS_FAILED,
  props<{ message: any }>()
);

export const loadMoreUsers = createAction(
  UsersTypes.LOAD_MORE_USERS,
  (offset: number, length: number) => ({
    offset: offset,
    length: length,
    message: 'load more users'
  })
);

export const loadMoreUsersSuccess = createAction(
  UsersTypes.LOAD_MORE_USERS_SUCCESS,
  props<{ users: [], total: number }>()
);

export const loadMoreUsersFailed = createAction(
  UsersTypes.LOAD_MORE_USERS_FAILED,
  props<{ message: any }>()
);


export const deleteUser = createAction(
  UsersTypes.DELETE_USER,
  (userIndex: number, userId: any) => ({
    user_index: userIndex,
    user_id: userId,
    message: 'delete user'
  })
);

export const deleteUserSuccess = createAction(
  UsersTypes.DELETE_USER_SUCCESS,
  props<{
    user_index: number,
    user: User,
    message: string
  }>()
);

export const deleteUserFailed = createAction(
  UsersTypes.DELETE_USER_FAILED,
  props<{ message: any }>()
);

export const addNewUser = createAction(
  UsersTypes.ADD_NEW_USER,
  props<{ user: User }>()
);

export const resetListUsersState = createAction(
  UsersTypes.RESET_LIST_USERS_STATE
);
