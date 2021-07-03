import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as pagesActions from '@state/pages.actions';
import * as pagesReducer from '@state/pages.reducer';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  public load = {
    allowToLoad: true,
    offset: 0,
    length: 10,
    total: 0
  };

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(pagesReducer.selectLoad).subscribe(load => {
      this.load = {
        ...load
      };
    });
  }

  get allowToLoadMore(): boolean {
    const nextOffset = this.load.offset + this.load.length;

    if (nextOffset < this.load.total) {
      return true;
    } else {
      return false;
    }
  }

  loadMorePages(): void {
    const nextOffset = this.load.offset + this.load.length;

    if (nextOffset < this.load.total) {
      this.store.dispatch(pagesActions.loadMorePages(nextOffset, this.load.length));
    }
  }
}
