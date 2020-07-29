import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GardenDetailPageRoutingModule } from './garden-detail-routing.module';

import { GardenDetailPage } from './garden-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GardenDetailPageRoutingModule
  ],
  declarations: [GardenDetailPage]
})
export class GardenDetailPageModule {}
