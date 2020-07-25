import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicHomePage } from './public-home.page';

const routes: Routes = [
  {
    path: '',
    component: PublicHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicHomePageRoutingModule {}
