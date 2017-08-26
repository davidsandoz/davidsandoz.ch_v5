import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { InlineSVGModule } from 'ng-inline-svg';

import { AboutMeModule } from './about-me/about-me.module';
import { HomeModule } from './home/home.module';
import { LinksModule } from './links/links.module';
import { ContactModule } from './contact/contact.module';
import { ImpressumModule } from "./impressum/impressum.module";
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    // InlineSVGModule,
    AboutMeModule,
    HomeModule,
    LinksModule,
    ContactModule,
    ImpressumModule,
    SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
