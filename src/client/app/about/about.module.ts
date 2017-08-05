import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, MarkdownModule.forRoot()],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
