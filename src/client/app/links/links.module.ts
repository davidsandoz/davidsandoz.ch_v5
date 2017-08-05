import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './links.component';
import { LinksRoutingModule } from './links-routing.module';
import { LinksService } from './links.service';

@NgModule({
  imports: [CommonModule, LinksRoutingModule],
  declarations: [LinksComponent],
  exports: [LinksComponent],
  providers: [LinksService]
})
export class LinksModule { }
