import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { IonicModule } from '@ionic/angular';

import { PublicAppointmentPageRoutingModule } from './public-appointment-routing.module';

import { PublicAppointmentPage } from './public-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,

    PublicAppointmentPageRoutingModule
  ],
  declarations: [PublicAppointmentPage]
})
export class PublicAppointmentPageModule {}
