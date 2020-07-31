import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interfaces/iuser';
import { Router } from '@angular/router';
import { FirebaseDBService } from 'src/app/Services/firebase/firebase-db.service';
import { NavController } from '@ionic/angular';
import { UtilityService } from 'src/app/Services/Utility/utility.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  private user = {} as IUser;
  constructor(private router: Router, private fireDBService:FirebaseDBService,
   private navCtrl:NavController,
   private utilServ:UtilityService) { }

  ngOnInit() {
  }


  private getNewpassword():void
  {
      

    //check if email is valid
        this.fireDBService.sendforgetPasswordEmail(this.user.email).then(()=>{
          this.utilServ.presentToast('Please check your email for the link.');
        }).catch((err)=>{
          this.utilServ.presentToast('Something went wrong, please check your internet connection.');
            console.log(err);

        });
   
  }

  goToLogin():void{
    //this.router.navigateByUrl('home');

   // this.navCtrl.navigateRoot('home');

   this.router.navigateByUrl('/login')
  }

}
