import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContributePage } from 'src/app/contribute/contribute.page';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ContributePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
