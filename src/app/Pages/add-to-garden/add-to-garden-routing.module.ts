import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToGardenPage } from './add-to-garden.page';

const routes: Routes = [
  {
    path: '',
    component: AddToGardenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToGardenPageRoutingModule {}
