import { Component, OnInit } from '@angular/core';
import { IPlants } from 'src/app/Interfaces/iplants';
import { FirebaseDBService } from 'src/app/Services/firebase/firebase-db.service';

@Component({
  selector: 'app-plant-tips',
  templateUrl: './plant-tips.page.html',
  styleUrls: ['./plant-tips.page.scss'],
})


export class PlantTipsPage implements OnInit {

  public plants:IPlants[]=[];
  public searchInput:string='';//stores user input from the searchbar

  private fireDB: FirebaseDBService;//must be injected in constructor but getting error

  /**
   * private fireDB: FirebaseDBService
   * Error when injecting custome firebaseDB service
   * 
   * */
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  // this.getAllPlants();
  }


      private getAllPlants():void
      {
          this.fireDB.getAllPlants().snapshotChanges().subscribe(notifications=>
            {
            notifications.forEach(not=>{
            this.plants.push(not.payload.val() as IPlants);
            console.log(not.payload.val())
           });
          });

      }


/**
 * 
 * @param ev 
 * Allows user to search input field for parking area
 */
searchPlants(ev: any) {
  // 
  this.plants=[];

  let name:string;
  
  // set val to the value of the searchbar
  this.searchInput = ev.target.value;

  // if the value is an empty string don't filter the Members
  if (this.searchInput && this.searchInput.trim() != '') {
    this.plants= this.plants.filter((plant) => {
      name= plant.name;
      return (name.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1);
    })
  }
}



}
