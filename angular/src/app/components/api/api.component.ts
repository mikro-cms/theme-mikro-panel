import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as apiActions from '@state/api.actions';
import * as apiReducer from '@state/api.reducer';
import * as apisReducer from '@state/apis.reducer';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  public apiId!: any;
  public api_name!: string;
  public api_version!: string;
  public api_author!: string;
  public api_url!: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.apiId = this.route.snapshot.paramMap.get('apiId');

    this.store.select(apiReducer.selectApi).subscribe((api: any) => {
      this.api_name = api.api_name;
      this.api_version = api.api_version;
      this.api_author = api.api_author;
      this.api_url = api.api_url;
    });

    this.store.select(apisReducer.selectApi, this.apiId).subscribe((api: any) => {
      if (!api) {
        this.store.dispatch(apiActions.loadApi(this.apiId));
      } else {
        this.store.dispatch(apiActions.loadApiSuccess({ api }))
      }
    });
  }
}
