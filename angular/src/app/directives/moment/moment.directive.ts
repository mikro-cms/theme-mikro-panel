import {
  Directive,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appMoment]'
})
export class MomentDirective implements OnInit {
  @Input() appMoment!: number;
  @Input() prefix!: string;
  @Input() invalid!: string;

  constructor(
    private element: ElementRef<HTMLElement>
  ) { }

  ngOnInit() {
    this.element.nativeElement.innerHTML = `${
      (
        this.appMoment ?
        ((this.prefix || '') + ' ' + moment(new Date(this.appMoment)).fromNow())
        :
        this.invalid
      )
    }`;
  }
}
