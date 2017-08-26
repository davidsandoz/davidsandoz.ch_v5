import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpressumComponent } from './impressum.component';
import { AboutMeRoutingModule } from './impressum-routing.module';
import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  imports: [CommonModule, AboutMeRoutingModule, MarkdownModule.forRoot()],
  declarations: [ImpressumComponent],
  exports: [ImpressumComponent]
})
export class ImpressumModule {
}
