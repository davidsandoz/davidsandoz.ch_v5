import {Component, AfterViewInit} from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ds-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements AfterViewInit {
  public currentLanguage: string = 'en';

  ngAfterViewInit() {
    this.currentLanguage = (<any>window).document.documentElement.lang;
  }
}
