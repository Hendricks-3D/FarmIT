import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantTipsPage } from './plant-tips.page';

const routes: Routes = [
  {
    path: '',
    component: PlantTipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantTipsPageRoutingModule {}
