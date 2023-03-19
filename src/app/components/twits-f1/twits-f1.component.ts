import { Component, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-twits-f1',
  templateUrl: './twits-f1.component.html',
  styleUrls: ['./twits-f1.component.css'],
})
export class TwitsF1Component implements AfterViewInit {
  rssData: any;

  constructor() {}

  ngAfterViewInit() {
    // Twitter feed - ensures widget reloads when user navigates back to the home component
    if ((<any>window).twttr) {
      (<any>window).twttr.widgets.load();
    }
    
  }
} 
