import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare const ENV: any;

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  constructor(
    private http: HttpClient
  ) { }

  public loadListPages(offset: number, length: number): Observable<any> {
    const listPagesApiUrl = `${ENV.apiUrl}/pages?offset=${offset}&length=${length}`;

    return this.http.get<any>(listPagesApiUrl);
  }
}
