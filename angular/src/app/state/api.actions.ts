import { createAction, props } from '@ngrx/store';
import { Api } from '@models/api.model';

export enum ApiTypes {
  LOAD_API = '[Api] Load Api',
  LOAD_API_SUCCESS = '[Api] Load Api Success',
  LOAD_API_FAILED = '[Api] Load Api Failed'
}

export const loadApi = createAction(
  ApiTypes.LOAD_API,
  (apiId: any) => ({
    apiId: apiId,
    message: 'Load Api'
  })
);

export const loadApiSuccess = createAction(
  ApiTypes.LOAD_API_SUCCESS,
  props<{ api: Api }>()
);

export const loadApiFailed = createAction(
  ApiTypes.LOAD_API_FAILED,
  props<{ message: any }>()
);
