import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Theme } from '@models/theme.model';
import * as themesAction from '@state/themes.actions';
import * as themesReducer from '@state/themes.reducer';

@Component({
  selector: 'app-select-themes',
  templateUrl: './select-themes.component.html',
  styleUrls: ['./select-themes.component.scss']
})
export class SelectThemesComponent implements OnInit {
  @Input() themeId: any;
  @Output() selectedThemeId = new EventEmitter<string>();

  public themes$!: Observable<Theme[]>;
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
    this.themes$ = this.store.pipe(select(themesReducer.selectThemes));

    this.store.select(themesReducer.selectLoad).subscribe((load) => {
      this.load = {
        ...load
      };
    });

    // only load themes once
    if (this.load.allowToLoad) {
      this.store.dispatch(themesAction.loadListThemes(this.load.offset, this.load.length, this.themeId));
    }
  }

  changeThemeId(themeId: string): void {
    this.selectedThemeId.emit(themeId);
  }
}
