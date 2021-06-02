import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from '@models/resource.model';

declare const ENV: any;

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  constructor(
    private http: HttpClient
  ) { }

  loadResource(resourceId: any): Observable<any> {
    const loadResourceApiUrl = `${ENV.apiUrl}/resource?resource_id=${resourceId}`;

    return this.http.get<any>(loadResourceApiUrl);
  }

  editResource(resource: Resource): Observable<any> {
    const editResource = `${ENV.apiUrl}/resource`;

    return this.http.put<any>(editResource, {
      resource_id: resource.resource_id,
      role_id: resource.role_id,
      role_group: resource.role_group
    });
  }
}
