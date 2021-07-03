import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '@models/page.model';

declare const ENV: any;

@Injectable({
  providedIn: 'root'
})
export class PageService {
  constructor(
    private http: HttpClient
  ) { }

  loadPage(pageId: number): Observable<any> {
    const loadPageApiUrl = `${ENV.apiUrl}/page?page_id=${pageId}`;

    return this.http.get<any>(loadPageApiUrl);
  }

  addNewPage(page: Page): Observable<any> {
    const addNewPageApiUrl = `${ENV.apiUrl}/page`;

    return this.http.post<any>(addNewPageApiUrl, {
      'role_id': page.role_id,
      'role_group': page.role_group,
      'page_url': page.page_url,
      'page_title': page.page_title,
      'theme_id': page.theme_id,
      'variant': page.variant
    });
  }

  editPage(page: Page): Observable<any> {
    const editPageApiUrl = `${ENV.apiUrl}/page`;
    const editedPage: any = {};

    editedPage.page_id = page.page_id;

    if (page.role_id) editedPage.role_id = page.role_id;
    if (page.role_group) editedPage.role_group = page.role_group;
    if (page.page_url) editedPage.page_url = page.page_url;
    if (page.page_title) editedPage.page_title = page.page_title;
    if (page.theme_id) editedPage.theme_id = page.theme_id;
    if (page.variant) editedPage.variant = page.variant;

    return this.http.put<any>(editPageApiUrl, editedPage);
  }
}
