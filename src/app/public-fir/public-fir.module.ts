import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicFIRPageRoutingModule } from './public-fir-routing.module';

import { PublicFIRPage } from './public-fir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicFIRPageRoutingModule
  ],
  declarations: [PublicFIRPage]
})
export class PublicFIRPageModule {}
