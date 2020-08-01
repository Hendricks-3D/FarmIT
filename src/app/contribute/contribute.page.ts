import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.page.html',
  styleUrls: ['./contribute.page.scss'],
})
export class ContributePage implements OnInit {

  constructor(public modalController: ModalController) { }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ngOnInit() {
  }

}
