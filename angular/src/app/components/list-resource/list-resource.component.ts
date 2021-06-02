import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Resource } from '@models/resource.model';
import * as resourcesActions from '@state/resources.actions';
import * as resourcesReducer from '@state/resources.reducer';

@Component({
  selector: 'app-list-resource',
  templateUrl: './list-resource.component.html',
  styleUrls: ['./list-resource.component.scss']
})
export class ListResourceComponent implements OnInit {
  @Input() apiId!: string;

  public resources$!: Observable<Resource[]>;
  public load = {
    allowToLoad: false,
    offset: 0,
    length: 0
  };

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.resources$ = this.store.pipe(select(resourcesReducer.selectResources));

    this.store.select(resourcesReducer.selectLoad).subscribe(load => {
      this.load = {
        ...load
      };
    });

    // only load resources once
    if (this.load.allowToLoad) {
      this.store.dispatch(resourcesActions.loadListResources(this.apiId, this.load.offset, this.load.length));
    }
  }
}
