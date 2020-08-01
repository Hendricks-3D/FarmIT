import { Component, OnInit } from '@angular/core';

import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { UtilityService } from 'src/app/Services/Utility/utility.service';

@Component({
  selector: 'app-pay-pal-checkout',
  templateUrl: './pay-pal-checkout.page.html',
  styleUrls: ['./pay-pal-checkout.page.scss'],
})
export class PayPalCheckoutPage implements OnInit {
  public paypal = '../../../assets/PayPal4.png';


  constructor(private payPal: PayPal, private utilSer:UtilityService) { }

  ngOnInit() {
  }





  public payPalCheckout():void{

    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'Adh51Y8S9NydPa3uIsIgmBBXlepYs8OeedvOASfQ76s2lH8SwTolCqZHMJD5ezyuk4wyPLpvQrXrBdlO'// MY PAypal Developer ID for testing
    }).then(() => {

      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({

      })).then(() => {
        let payment = new PayPalPayment('150.00', 'USD', 'Party Ticket', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then(() => {
          // Successfully paid
    
          this.utilSer.presentToast('Successfully paid')

        }, () => {
          // Error or render dialog closed without being successful
          this.utilSer.presentToast('Error or render dialog closed without being successful');
        });
      }, () => {
        // Error in configuration
        this.utilSer.presentToast('Error in configuration');
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
      this.utilSer.presentToast('Error in initialization, maybe PayPal is not supported or something else');
    });
  }


}
