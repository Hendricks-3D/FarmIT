import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(public toastController: ToastController) { }





  /**
  * Method that creates toast messages
  * @param message 
  */
 async presentToast(msg:string) {
   const toast = await this.toastController.create({
     message: msg,
     duration: 2000
   });
   toast.present();
 }
}
