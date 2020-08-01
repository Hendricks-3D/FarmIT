import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCropToMarketPageRoutingModule } from './add-crop-to-market-routing.module';

import { AddCropToMarketPage } from './add-crop-to-market.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCropToMarketPageRoutingModule
  ],
  declarations: [AddCropToMarketPage]
})
export class AddCropToMarketPageModule {}
