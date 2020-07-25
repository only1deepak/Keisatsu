import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicNOCPage } from './public-noc.page';

const routes: Routes = [
  {
    path: '',
    component: PublicNOCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicNOCPageRoutingModule {}
