import { createAction, props } from '@ngrx/store';
import { Api } from '@models/api.model';

export enum ApisTypes {
  LOAD_LIST_APIS = '[Apis] Load List Apis',
  LOAD_LIST_APIS_SUCCESS = '[Apis] Load List Apis Success',
  LOAD_LIST_APIS_FAILED = '[Apis] Load List Apis Failed'
}

export const loadListApis = createAction(
  ApisTypes.LOAD_LIST_APIS,
  (offset: number, length: number) => ({
    offset: offset,
    length: length,
    message: 'Load List Apis'
  })
);

export const loadListApisSuccess = createAction(
  ApisTypes.LOAD_LIST_APIS_SUCCESS,
  props<{ apis: Api[], total: number }>()
);

export const loadListApisFailed = createAction(
  ApisTypes.LOAD_LIST_APIS_FAILED,
  props<{ message: any }>()
);
