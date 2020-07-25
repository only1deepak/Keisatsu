import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicAppointmentPage } from './public-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: PublicAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicAppointmentPageRoutingModule {}
