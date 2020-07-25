import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicHomePageRoutingModule } from './public-home-routing.module';

import { PublicHomePage } from './public-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicHomePageRoutingModule
  ],
  declarations: [PublicHomePage]
})
export class PublicHomePageModule {}
