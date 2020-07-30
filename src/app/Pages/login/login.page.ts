import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseDBService } from 'src/app/Services/firebase/firebase-db.service';
import { UtilityService } from 'src/app/Services/Utility/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  private email:string;// Stores user email from login input field
  private password:string;//stores user's password from login screen
  private toast;


  constructor(private router:Router, private fireDB:FirebaseDBService,private utilServ:UtilityService) { }




ngOnInit() {
}

/**
* Method that send users to the the registration page.
* Called in the home.html page
*/
private goToSignUp():void {
this.router.navigateByUrl('/tabs/registration');
}


/**
* Call method from firebase DB service class to authenticate user credentials
*/
private loginUser():void{
this.fireDB.authenticateUser(this.email,this.password).then(()=>{
  //print successful toast message

 this.utilServ.presentToast('Login was successful.');
 this.router.navigateByUrl('/tabs/home');
  
}).catch((err)=>{

  this.utilServ.presentToast('Please check your email and password.');
})
}



  private goToForgetPassword():void{

   
    this.router.navigateByUrl('/tabs/forget-password');
  }
}
