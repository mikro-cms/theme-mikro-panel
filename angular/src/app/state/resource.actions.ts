import { createAction, props } from '@ngrx/store';
import { Resource } from '@models/resource.model';

export enum ResourceTypes {
  LOAD_RESOURCE = '[Resource] Load Resource',
  LOAD_RESOURCE_SUCCESS = '[Resource] Load Resource Success',
  LOAD_RESOURCE_FAILED = '[Resource] Load Resource Failed',
  EDIT_RESOURCE = '[Resource] Edit Resource',
  EDIT_RESOURCE_SUCCESS = '[Resource] Edit Resource Success',
  EDIT_RESOURCE_FAILED = '[Resource] Edit Resource Failed'
}

export const loadResource = createAction(
  ResourceTypes.LOAD_RESOURCE,
  (resourceId: any) => ({
    resourceId: resourceId,
    message: 'Load Resource'
  })
);

export const loadResourceSuccess = createAction(
  ResourceTypes.LOAD_RESOURCE_SUCCESS,
  props<{ resource: Resource }>()
);

export const loadResourceFailed = createAction(
  ResourceTypes.LOAD_RESOURCE_FAILED,
  props<{ message: any }>()
);

export const editResource = createAction(
  ResourceTypes.EDIT_RESOURCE,
  (resourceIndex: any, resource: Resource) => ({
    resource_index: resourceIndex,
    resource: resource,
    message: 'Edit Resource'
  })
);

export const editResourceSuccess = createAction(
  ResourceTypes.EDIT_RESOURCE_SUCCESS,
  props<{ resource: Resource, message: string }>()
);

export const editResourceFailed = createAction(
  ResourceTypes.EDIT_RESOURCE_FAILED,
  props<{ message: any }>()
);
