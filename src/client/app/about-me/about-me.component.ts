import {Component, AfterViewInit} from '@angular/core';

/**
 * This class represents the lazy loaded AboutMeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ds-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutMeComponent implements AfterViewInit {
  public currentLanguage: string = 'en';

  ngAfterViewInit() {
    this.currentLanguage = (<any>window).document.documentElement.lang;
  }
}
