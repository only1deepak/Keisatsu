import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliceAuthPage } from './police-auth.page';

const routes: Routes = [
  {
    path: '',
    component: PoliceAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliceAuthPageRoutingModule {}
