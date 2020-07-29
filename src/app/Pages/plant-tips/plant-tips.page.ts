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

  public plants:IPlants[]=[];//Stores a list of plants retrieved from the firebase database
  public plantsList:IPlants[]=[];// stores a copy of the list of plants so the search results can be refreshed on each key input
  public searchInput:string='';//stores user input from the searchbar

  public selectedPlant= {} as IPlants; //Stores the plant selected from the user for ngModel

  constructor(private fireDB: FirebaseDBService) { }

  ngOnInit() {

     this.selectedPlant.name='none';
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



/**
 * This method adds the selected plant to our variable so we can use data binding to show the data
 * @param plant 
 */
public showSearchResults(plant:IPlants):void
{
     this.selectedPlant= plant;

     this.searchInput='';
}


}
