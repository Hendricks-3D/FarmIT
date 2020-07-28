import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDBService {


  //Firebase node references 
  private mainDBNodeRef = "FARMITDB";
  private plantNodeRef = "Plants";

  constructor(private afDatabase: AngularFireDatabase) { }


  /**
   * This method will get a reference to the list of plants in the firebase database.
   */
  public getAllPlants(){
    return  this.afDatabase.list(`${this.mainDBNodeRef}/${this.plantNodeRef}`);
  }


  
}
