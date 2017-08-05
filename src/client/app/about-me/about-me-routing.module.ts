import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'about-me', component: AboutMeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
