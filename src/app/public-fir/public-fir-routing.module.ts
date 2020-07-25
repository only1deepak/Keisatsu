import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicFIRPage } from './public-fir.page';

const routes: Routes = [
  {
    path: '',
    component: PublicFIRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicFIRPageRoutingModule {}
