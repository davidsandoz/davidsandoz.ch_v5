import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { LangSwitcherService } from './shared/lang-switcher/lang-switcher.service';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'ds-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
    window.document.documentElement.lang = LangSwitcherService.getLocale();
  }
}
