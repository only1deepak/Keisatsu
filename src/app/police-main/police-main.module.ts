import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliceMainPageRoutingModule } from './police-main-routing.module';

import { PoliceMainPage } from './police-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliceMainPageRoutingModule
  ],
  declarations: [PoliceMainPage]
})
export class PoliceMainPageModule {}
