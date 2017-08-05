import {Component, OnInit} from '@angular/core';
import {LangSwitcherService} from "../shared/lang-switcher/lang-switcher.service";

/**
 * This class represents the lazy loaded AboutMeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ds-about',
  templateUrl: 'about-me.component.html',
  styleUrls: ['about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  public currentLanguage: string;

  ngOnInit() {
    this.currentLanguage = LangSwitcherService.getLang();
    console.log(this.currentLanguage);
  }
}
