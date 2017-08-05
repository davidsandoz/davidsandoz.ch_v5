import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinksComponent } from './links.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'links', component: LinksComponent }
    ])
  ],
  exports: [RouterModule]
})
export class LinksRoutingModule { }
