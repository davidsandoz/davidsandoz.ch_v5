import { Component, OnInit } from '@angular/core';
import { SocialLinksService } from '../shared/social-links/social-links.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ds-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  errorMessage: string;
  socialLinks: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * SocialLinksService.
   *
   * @param {SocialLinksService} socialLinksService - The injected SocialLinksService.
   */
  constructor(public socialLinksService: SocialLinksService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getSocialLinks();
  }

  /**
   * Handle the socialLinksService observable
   */
  getSocialLinks() {
    this.socialLinksService.get()
      .subscribe(
        socialLinks => this.socialLinks = socialLinks,
        error => this.errorMessage = <any>error
      );
  }

}
