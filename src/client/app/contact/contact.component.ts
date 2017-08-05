import {Component, OnInit, ViewEncapsulation} from '@angular/core';

/**
 * This class represents the lazy loaded ContactComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ds-contact',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class ContactComponent implements OnInit {
  public emailAddress: string;

  ngOnInit() {
    this.emailAddress = 'contact@davidsandoz.ch';
  }
}
