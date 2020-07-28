import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantTipsPageRoutingModule } from './plant-tips-routing.module';

import { PlantTipsPage } from './plant-tips.page';
import { CustomFilterPipe } from '../../Pipes/custom-filter.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantTipsPageRoutingModule
  ],
  declarations: [PlantTipsPage,CustomFilterPipe]
})
export class PlantTipsPageModule {}
