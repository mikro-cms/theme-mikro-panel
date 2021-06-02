import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Api } from '@models/api.model';
import * as apisActions from '@state/apis.actions';
import * as apisReducer from '@state/apis.reducer';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.scss']
})
export class ListApiComponent implements OnInit {
  public apis$!: Observable<Api[]>;
  public load = {
    allowToLoad: false,
    offset: 0,
    length: 10
  };

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.apis$ = this.store.pipe(select(apisReducer.selectApis));

    this.store.select(apisReducer.selectLoad).subscribe((load) => {
      this.load = {
        ...load
      };
    });

    // only load apis once
    if (this.load.allowToLoad) {
      this.store.dispatch(apisActions.loadListApis(this.load.offset, this.load.length));
    }
  }
}
