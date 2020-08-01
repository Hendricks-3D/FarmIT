import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayPalCheckoutPageRoutingModule } from './pay-pal-checkout-routing.module';

import { PayPalCheckoutPage } from './pay-pal-checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayPalCheckoutPageRoutingModule
  ],
  declarations: [PayPalCheckoutPage]
})
export class PayPalCheckoutPageModule {}
