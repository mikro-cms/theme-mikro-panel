import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

declare const ENV: any;

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {
  public pageId: any;
  public pageUrl!: any;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const token = window.localStorage.getItem('token');

    this.pageId = this.route.snapshot.paramMap.get('pageId');
    this.pageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${ENV.apiUrl}/customize?page_id=${this.pageId}&token=${token}`);
  }
}
