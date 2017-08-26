import { Component, OnInit } from '@angular/core';
import { LangSwitcherService } from '../shared/lang-switcher/lang-switcher.service';

/**
 * This class represents the lazy loaded ImpressumComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ds-impressum',
  templateUrl: 'impressum.component.html',
  styleUrls: ['impressum.component.css']
})
export class ImpressumComponent implements OnInit {
  public currentLanguage: string;

  ngOnInit() {
    this.currentLanguage = LangSwitcherService.getLang();
  }
}
