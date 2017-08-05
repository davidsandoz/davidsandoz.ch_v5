import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  imports: [CommonModule, AboutMeRoutingModule, MarkdownModule.forRoot()],
  declarations: [AboutMeComponent],
  exports: [AboutMeComponent]
})
export class AboutMeModule { }
