import { Component, OnInit, Injectable } from '@angular/core';
import { IPlants } from 'src/app/Interfaces/iplants';
import { FirebaseDBService } from 'src/app/Services/firebase/firebase-db.service';

@Component({
  selector: 'app-plant-tips',
  templateUrl: './plant-tips.page.html',
  styleUrls: ['./plant-tips.page.scss'],
})


@Injectable({
  providedIn: 'root'
})
export class PlantTipsPage implements OnInit {

  public plants:IPlants[]=[];
  public plantsList:IPlants[]=[];
  public searchInput:string='';//stores user input from the searchbar

  //must be injected in constructor but getting error

  /**
   * private fireDB: FirebaseDBService
   * Error when injecting custome firebaseDB service
   * 
   * */
  constructor(private fireDB: FirebaseDBService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  this.getAllPlants();
  this.plantsList = this.plants;

  }


      private getAllPlants():void
      {
          this.fireDB.getAllPlants().snapshotChanges().subscribe(plants=>
            {
            plants.forEach(plant=>{
            this.plants.push(plant.payload.val() as IPlants);
            
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
  this.plants = this.plantsList;

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



public refreshFilter():void{
  this.plants=[];
  this.getAllPlants();
}


}
