import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToGardenPageRoutingModule } from './add-to-garden-routing.module';

import { AddToGardenPage } from './add-to-garden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToGardenPageRoutingModule
  ],
  declarations: [AddToGardenPage]
})
export class AddToGardenPageModule {}
