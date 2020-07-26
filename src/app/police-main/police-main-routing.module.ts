import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliceMainPage } from './police-main.page';

const routes: Routes = [
  {
    path: '',
    component: PoliceMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliceMainPageRoutingModule {}
