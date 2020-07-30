import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import { IUser } from 'src/app/Interfaces/iuser';


@Injectable({
  providedIn: 'root'
})
export class FirebaseDBService {


  //Firebase node references 
  public mainDBNodeRef = "FARMITDB";
  public  plantNodeRef = "Plants";
  public gardenRef="garden"
  public userNodeRef = "userProfile";
  public userData = {} as IUser;
  


  constructor(private afDatabase: AngularFireDatabase,private afAuth:AngularFireAuth) {

    
   }


/**
 * THIS METHOD WILL FIRST GET THE USER ID FROM THE CURRENT AUTHENTICATION STATE
 * THEN GET THE USER CURRENT DATA FROM THE DATABASE
\ * THEN STORES USER DATA IN LOCALSTORAGE SINCE IT IS ONLY ACCESSIBLE IN THE `authstate.subscribe` SCOPE
 * THEN RETURN THE USER DATA
 */
public GetCurrentUserData(): IUser {

  this.afAuth.authState.subscribe(auth=>{


    this.afDatabase.object(`${this.mainDBNodeRef}/${this.userNodeRef}/${auth.uid}`).snapshotChanges().subscribe(data=>{
      this.userData = data.payload.val() as IUser;

    localStorage.setItem('user',JSON.stringify(this.userData))
  })

  })
  
  
this.userData = JSON.parse(localStorage.getItem('user'));

  console.log(this.userData);
    return this.userData;
}




  /**
   * This method will get a reference to the list of plants in the firebase database.
   */
  public getAllPlants(){
    return  this.afDatabase.list(`${this.mainDBNodeRef}/${this.plantNodeRef}`);
  }

  /**
   * This method will get a reference to the list of plants in the user garden
   */
  public getAllGardenPlants(){
    return  this.afDatabase.list(`${this.mainDBNodeRef}/${this.userNodeRef}/${this.userData.uid}/${this.plantNodeRef}`);
  }


  

  /**
   * 
   * @param email 
   * @param password 
   * 
   * Method that creates new user and return promise of the user's credential,
   * so we can use the "Then" key later on.
   */
  public createNewUser(email:string,password:string):Promise<firebase.auth.UserCredential>{
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
}

/**
 * 
 * @param path 
 * @param object 
 */
public addNewDataToDB(path:string,object:any):Promise<void>{
  return this.afDatabase.object(`${path}`).set(object);
}



/**
 * 
 * @param email 
 * @param password 
 * 
 * Method that accepts email and password to check if the user data is in the database 
 * if it is then this data will return to be used later on
 */
public authenticateUser(email,password):Promise<firebase.auth.UserCredential>{
  return this.afAuth.auth.signInWithEmailAndPassword(email,password);
}

   /**
   * 
   */
  public sendforgetPasswordEmail(email):Promise<void>{
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

}
