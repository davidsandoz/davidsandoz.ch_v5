import { Component, OnInit } from '@angular/core';
import { LangSwitcherService } from '../lang-switcher/lang-switcher.service';
import { NavigationStart, Router } from '@angular/router';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ds-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public locale: string;
  public currentPageSlug: string;

  public constructor(private router: Router) {
    this.locale = LangSwitcherService.getLocale();
  }

  public selectLocale = (locale: string) => {
    LangSwitcherService.setLocale(locale, this.currentPageSlug);
  };

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.currentPageSlug = event.url.slice(1);
      }
    });
  }
}

