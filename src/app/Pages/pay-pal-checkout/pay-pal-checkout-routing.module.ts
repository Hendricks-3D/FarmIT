import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayPalCheckoutPage } from './pay-pal-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: PayPalCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayPalCheckoutPageRoutingModule {}
