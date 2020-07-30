import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interfaces/iuser';
import { Router } from '@angular/router';
import { FirebaseDBService } from 'src/app/Services/firebase/firebase-db.service';
import { UtilityService } from 'src/app/Services/Utility/utility.service';
import {AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  private mainDBNodeRef = "FARMITDB";
  private userNodeRef = "userProfile";
  private user = {} as IUser;//create user of type IUser, which is an interface.
  private password:string;//stores first password
  private confirmPassword;//Stores second password


 constructor(private router: Router, private fireDBService:FirebaseDBService,
   private afAuth:AngularFireAuth, private utilityServ:UtilityService) {}

 /**
  * Navigate user to the login page
  */
 private goToLogin():void {
   this.router.navigateByUrl('/tabs/login');
 }

 ngOnInit() {
 }

 /**
  * calls the create user method from the firebaseDB service
  * 
  */
 private registerUser():void{


       this.fireDBService.createNewUser(this.user.email,this.password).then(()=>{
       this.afAuth.authState.subscribe((auth) =>{ 
         
         this.user.uid = auth.uid;//Get user ID from firebase
         console.log("uid saved ");
         //Store user information to the database after specifying the node references.
         this.fireDBService.addNewDataToDB(`${this.mainDBNodeRef}/${this.userNodeRef}/${this.user.uid}`,this.user)
         .then(()=>{
           console.log("user data stored");
           this.router.navigateByUrl('home');

             this.utilityServ.presentToast('Registration as successful!');
         }).catch((err)=>{

           this.utilityServ.presentToast('Registration failed! please check ');
           console.log(err)
         })

       })

       })



 }

}
