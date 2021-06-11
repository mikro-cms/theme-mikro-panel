import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Page } from '@models/page.model';
import * as pagesActions from '@state/pages.action';
import * as pagesReducer from '@state/pages.reducer';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  public pages$!: Observable<Page[]>;
  public load = {
    allowToLoad: true,
    offset: 0,
    length: 10
  };

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.pages$ = this.store.pipe(select(pagesReducer.selectPages));

    this.store.select(pagesReducer.selectLoad).subscribe((load) => {
      this.load = {
        ...load
      };
    });

    // only load pages once
    if (this.load.allowToLoad) {
      this.store.dispatch(pagesActions.loadListPages(this.load.offset, this.load.length));
    }
  }
}
