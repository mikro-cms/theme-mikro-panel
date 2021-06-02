import { createAction, props } from '@ngrx/store';
import { Resource } from '@models/resource.model';

export enum ResourcesTypes {
  LOAD_LIST_RESOURCES = '[Resources] Load List Resources',
  LOAD_LIST_RESOURCES_SUCCESS = '[Resources] Load List Resources Success',
  LOAD_LIST_RESOURCES_FAILED = '[Resources] Load List Resources Failed',
  EDIT_RESOURCE = '[Resources] Edit Resource'
}

export const loadListResources = createAction(
  ResourcesTypes.LOAD_LIST_RESOURCES,
  (apiId: string, offset: number, length: number) => ({
    apiId: apiId,
    offset: offset,
    length: length,
    message: 'Load List Resources'
  })
);

export const loadListResourcesSuccess = createAction(
  ResourcesTypes.LOAD_LIST_RESOURCES_SUCCESS,
  props<{ resources: Resource[], total: number }>()
);

export const loadListResourcesFailed = createAction(
  ResourcesTypes.LOAD_LIST_RESOURCES_FAILED,
  props<{ message: any }>()
);

export const editResource = createAction(
  ResourcesTypes.EDIT_RESOURCE,
  props<{ resource_index: any, resource: Resource }>()
);
