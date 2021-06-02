import { createAction, props } from '@ngrx/store';
import { Role } from '@models/role.model';

export enum RolesTypes {
  LOAD_LIST_ROLES = '[Roles] Load List Roles',
  LOAD_LIST_ROLES_SUCCESS = '[Roles] Load List Roles Success',
  LOAD_LIST_ROLES_FAILED = '[Roles] Load List Roles Failed'
}

export const loadListRoles = createAction(
  RolesTypes.LOAD_LIST_ROLES,
  (offset: number, length: number) => ({
    offset: offset,
    length: length,
    message: 'Load List Role'
  })
);

export const loadListRolesSuccess = createAction(
  RolesTypes.LOAD_LIST_ROLES_SUCCESS,
  props<{ roles: Role[], total: number }>()
);

export const loadListRolesFailed = createAction(
  RolesTypes.LOAD_LIST_ROLES_FAILED,
  props<{ message: any }>()
);
