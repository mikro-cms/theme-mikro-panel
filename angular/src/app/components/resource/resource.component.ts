import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Resource } from '@models/resource.model';
import * as exceptionActions from '@state/exception.actions';
import * as resourcesReducer from '@state/resources.reducer';
import * as resourceReducer from '@state/resource.reducer';
import * as resourceActions from '@state/resource.actions';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  public resourceIndex: any;
  public apiId: any;
  public resourceId: any;
  public role_id: any;
  public role_group!: string;
  public api_resource!: string;
  public api_method!: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(exceptionActions.resetExceptionState());

    this.resourceIndex = this.route.snapshot.paramMap.get('resourceIndex');
    this.apiId = this.route.snapshot.paramMap.get('apiId');
    this.resourceId = this.route.snapshot.paramMap.get('resourceId');

    this.store.select(resourceReducer.selectResource).subscribe((resource: any) => {
      this.role_id = resource.role_id;
      this.role_group = resource.role_group;
      this.api_resource = resource.api_resource;
      this.api_method = resource.api_method;
    });

    this.store.select(resourcesReducer.selectResource, this.resourceId).subscribe((resource: any) => {
      if (!resource) {
        this.store.dispatch(resourceActions.loadResource(this.resourceId));
      } else {
        this.store.dispatch(resourceActions.loadResourceSuccess({ resource: resource }));
      }
    });
  }

  selectedRoleId(roleId: any): void {
    this.role_id = roleId;
  }

  editResource(): void {
    const resource: Resource = {
      resource_id: this.resourceId,
      role_id: this.role_id || 'none',
      role_group: this.role_group,
      api_resource: this.api_resource,
      api_method: this.api_method
    };

    this.store.dispatch(resourceActions.editResource(this.resourceIndex, resource));
  }
}
