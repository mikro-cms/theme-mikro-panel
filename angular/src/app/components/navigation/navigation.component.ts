import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() title!: string;
  @Input() backlink!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
