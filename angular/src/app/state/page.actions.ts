import { createAction, props } from '@ngrx/store';
import { Page } from '@models/page.model';

export enum PageTypes {
  LOAD_PAGE = '[Page] Load Page',
  LOAD_PAGE_SUCCESS = '[Page] Load Page Success',
  LOAD_PAGE_FAILED = '[Page] Load Page Failed',
  ADD_NEW_PAGE = '[Page] Add New Page',
  ADD_NEW_PAGE_SUCCESS = '[Page] Add New Page Success',
  ADD_NEW_PAGE_FAILED = '[Page] Add New Page Failed',
  EDIT_PAGE = '[Page] Edit Page',
  EDIT_PAGE_SUCCESS = '[Page] Edit Page Success',
  EDIT_PAGE_FAILED = '[Page] Edit Page Failed'
}

export const loadPage = createAction(
  PageTypes.LOAD_PAGE,
  (pageId: any) => ({
    page_id: pageId,
    message: 'load page'
  })
);

export const loadPageSuccess = createAction(
  PageTypes.LOAD_PAGE_SUCCESS,
  props<{ page: Page }>()
);

export const loadPageFailed = createAction(
  PageTypes.LOAD_PAGE_FAILED,
  props<{ message: any }>()
);

export const addNewPage = createAction(
  PageTypes.ADD_NEW_PAGE,
  (page: Page) => ({
    page: page,
    message: 'add new page'
  })
);

export const addNewPageSuccess = createAction(
  PageTypes.ADD_NEW_PAGE_SUCCESS,
  props<{ message: string }>()
);

export const addNewPageFailed = createAction(
  PageTypes.ADD_NEW_PAGE_FAILED,
  props<{ message: any }>()
);

export const editPage = createAction(
  PageTypes.EDIT_PAGE,
  (page: Page) => ({
    page: page,
    message: 'edit page'
  })
);

export const editPageSuccess = createAction(
  PageTypes.EDIT_PAGE_SUCCESS,
  props<{ page: Page, message: string }>()
);

export const editPageFailed = createAction(
  PageTypes.EDIT_PAGE_FAILED,
  props<{ message: any }>()
);
