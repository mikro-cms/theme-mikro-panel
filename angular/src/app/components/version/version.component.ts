import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

declare const ENV: any;

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {
  public appName!: string;
  public version!: string;

  constructor() {}

  ngOnInit(): void {
    this.appName = ENV.appName;
    this.version = environment.version;
  }

}
