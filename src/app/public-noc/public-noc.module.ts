import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicNOCPageRoutingModule } from './public-noc-routing.module';

import { PublicNOCPage } from './public-noc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicNOCPageRoutingModule
  ],
  declarations: [PublicNOCPage]
})
export class PublicNOCPageModule {}
