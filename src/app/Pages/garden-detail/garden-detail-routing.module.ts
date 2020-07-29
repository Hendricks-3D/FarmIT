import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GardenDetailPage } from './garden-detail.page';

const routes: Routes = [
  {
    path: '',
    component: GardenDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GardenDetailPageRoutingModule {}
