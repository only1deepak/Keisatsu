import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicAppointmentPageRoutingModule } from './public-appointment-routing.module';

import { PublicAppointmentPage } from './public-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicAppointmentPageRoutingModule
  ],
  declarations: [PublicAppointmentPage]
})
export class PublicAppointmentPageModule {}
