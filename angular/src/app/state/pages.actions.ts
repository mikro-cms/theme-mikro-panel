import { createAction, props } from '@ngrx/store';
import { Page } from '@models/page.model';

export enum PagesTypes {
  LOAD_LIST_PAGES = '[Pages] Load List Pages',
  LOAD_LIST_PAGES_SUCCESS = '[Pages] Load List Pages Success',
  LOAD_LIST_PAGES_FAILED = '[Pages] Load List Pages Failed',
  LOAD_MORE_PAGES = '[Pages] Load More Pages',
  LOAD_MORE_PAGES_SUCCESS = '[Pages] Load More Pages Success',
  LOAD_MORE_PAGES_FAILED = '[Pages] Load More Pages Failed',
  ADD_NEW_PAGE = '[Pages] Add New Page'
}

export const loadListPages = createAction(
  PagesTypes.LOAD_LIST_PAGES,
  (offset: number, length: number) => ({
    offset: offset,
    length: length,
    message: 'load list pages'
  })
);

export const loadListPagesSuccess = createAction(
  PagesTypes.LOAD_LIST_PAGES_SUCCESS,
  props<{ pages: Page[], total: number }>()
);

export const loadListPagesFailed = createAction(
  PagesTypes.LOAD_LIST_PAGES_FAILED,
  props<{ message: any }>()
);

export const loadMorePages = createAction(
  PagesTypes.LOAD_MORE_PAGES,
  (offset: number, length: number) => ({
    offset: offset,
    length: length,
    message: 'load more pages'
  })
);

export const loadMorePagesSuccess = createAction(
  PagesTypes.LOAD_MORE_PAGES_SUCCESS,
  props<{ pages: Page[], total: number }>()
);

export const loadMorePagesFailed = createAction(
  PagesTypes.LOAD_LIST_PAGES_FAILED,
  props<{ message: any }>()
);

export const addNewPage = createAction(
  PagesTypes.ADD_NEW_PAGE,
  props<{ page: Page }>()
);
