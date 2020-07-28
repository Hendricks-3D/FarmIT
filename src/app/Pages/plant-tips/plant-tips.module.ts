import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantTipsPageRoutingModule } from './plant-tips-routing.module';

import { PlantTipsPage } from './plant-tips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantTipsPageRoutingModule
  ],
  declarations: [PlantTipsPage]
})
export class PlantTipsPageModule {}
