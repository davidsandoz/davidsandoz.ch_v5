import {Component, OnInit} from '@angular/core';
import { LinksService } from './links.service';
import {LangSwitcherService} from "../shared/lang-switcher/lang-switcher.service";

/**
 * This class represents the lazy loaded LinksComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ds-links',
  templateUrl: 'links.component.html',
  styleUrls: ['links.component.css'],
})
export class LinksComponent implements OnInit {

  errorMessage: string;
  public links: any[] = [];
  public currentLanguage: string;

  /**
   * Creates an instance of the LInksComponent with the injected
   * SocialLinksService.
   *
   * @param {SocialLinksService} linksService - The injected SocialLinksService.
   */
  constructor(public linksService: LinksService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getLinks();
    this.currentLanguage = LangSwitcherService.getLang();
  }

  /**
   * Handle the socialLinksService observable
   */
  getLinks() {
    this.linksService.get()
      .subscribe(
        links => this.links = links,
        error => this.errorMessage = <any>error
      );
  }

}
