import { Component } from '@angular/core';
import {LangSwitcherService} from "../lang-switcher/lang-switcher.service";

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent {
  public locale: string;

  public constructor () {
    this.locale = LangSwitcherService.getLocale();
  }

  public selectLocale = (locale: string) => {
    LangSwitcherService.setLocale(locale);
  }
}
