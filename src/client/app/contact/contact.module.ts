import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
// import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  imports: [CommonModule, ContactRoutingModule/*, InlineSVGModule.forRoot({ baseUrl: '/assets/svg/' })*/],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule { }
