import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Page } from '@models/page.model';
import * as exceptionActions from '@state/exception.actions';
import * as pageActions from '@state/page.actions';
import * as pageReducer from '@state/page.reducer';
import * as pagesReducer from '@state/pages.reducer';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  public data!: any;
  public title!: string;
  public pageId!: any;
  public role_id!: any;
  public role_group: any;
  public page_url!: string;
  public page_title!: string;
  public theme_id!: any;
  public variant!: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(exceptionActions.resetExceptionState());

    this.pageId = this.route.snapshot.paramMap.get('pageId');

    this.route.data.subscribe(data => {
      this.data = data;
    });

    if (this.data.type === 'add') {
      this.title = 'Add New Page';
    } else {
      this.title = 'Edit Page';

      this.loadPageData();
    }
  }

  loadPageData(): void {
    this.store.select(pageReducer.selectPage).subscribe(page => {
      this.role_id = page.role_id;
      this.role_group = page.role_group;
      this.page_url = page.page_url;
      this.page_title = page.page_title;
      this.theme_id = page.theme_id;
      this.variant = page.variant;
    });

    this.store.select(pagesReducer.selectPage, this.pageId).subscribe((page: any) => {
      if (!page) {
        this.store.dispatch(pageActions.loadPage(this.pageId));
      } else {
        this.store.dispatch(pageActions.loadPageSuccess({ page: page }));
      }
    });
  }

  selectedRoleId(roleId: any): void {
    this.role_id = roleId;
  }

  selectedThemeId(themeId: any): void {
    this.theme_id = themeId;
  }

  selectedVariantName(variantName: any): void {
    this.variant = variantName;
  }

  savePage(): void {
    if (this.data.type === 'add') {
      this.addNewPage();
    } else {
      this.editPage();
    }
  }

  addNewPage(): void {
    const page: Page = {
      page_id: this.pageId,
      role_id: this.role_id,
      role_group: this.role_group,
      page_url: this.page_url,
      page_title: this.page_title,
      theme_id: this.theme_id,
      variant: this.variant
    };

    this.store.dispatch(pageActions.addNewPage(page));
  }

  editPage(): void {
    const page = {
      page_id: this.pageId,
      role_id: this.role_id,
      role_group: this.role_group,
      page_url: this.page_url,
      page_title: this.page_title,
      theme_id: this.theme_id,
      variant: this.variant
    };

    this.store.dispatch(pageActions.editPage(page));
  }
}
