import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCropToMarketPage } from './add-crop-to-market.page';

const routes: Routes = [
  {
    path: '',
    component: AddCropToMarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCropToMarketPageRoutingModule {}
