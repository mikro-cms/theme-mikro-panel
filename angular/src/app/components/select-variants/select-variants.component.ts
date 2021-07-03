import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as themesReducer from '@state/themes.reducer';

@Component({
  selector: 'app-select-variants',
  templateUrl: './select-variants.component.html',
  styleUrls: ['./select-variants.component.scss']
})
export class SelectVariantsComponent implements OnInit {
  @Input() variantName: any;
  @Output() selectedVariantName = new EventEmitter<string>();

  public _themeId!: any;
  public variants$!: Observable<string[]>;

  @Input() set themeId(value) {
    this._themeId = value;

    if (this.variants$) {
      this.variantName = null;

      this.setVariants(value);
    }
  }

  get themeId(): any {
    return this._themeId;
  }

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.setVariants(this.themeId);
  }

  setVariants(themeId: any): void {
    this.variants$ = this.store.pipe(select(themesReducer.selectVariants, themeId));
  }

  variantChange(variantName: string): void {
    this.selectedVariantName.emit(variantName);
  }
}
