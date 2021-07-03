import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare const ENV: any;

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  constructor(
    private http: HttpClient
  ) { }

  loadListThemes(offset: number, length: number): Observable<any> {
    const listThemesApiUrl = `${ENV.apiUrl}/themes?offset=${offset}&length=${length}`;

    return this.http.get<any>(listThemesApiUrl);
  }
}
