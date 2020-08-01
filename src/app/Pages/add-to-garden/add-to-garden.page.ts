import { Component, OnInit } from '@angular/core';
import { GardenCrop } from 'src/app/Interfaces/garden-crop';
import { FirebaseDBService } from 'src/app/Services/firebase/firebase-db.service';
import { IPlants } from 'src/app/Interfaces/iplants';
import { UtilityService } from 'src/app/Services/Utility/utility.service';

@Component({
  selector: 'app-add-to-garden',
  templateUrl: './add-to-garden.page.html',
  styleUrls: ['./add-to-garden.page.scss'],
})
export class AddToGardenPage implements OnInit {

  public crop  =  {} as GardenCrop;

  public plants:IPlants[]=[];//Stores a list of plants retrieved from the firebase database
  public plantsList:IPlants[]=[];// stores a copy of the list of plants so the search results can be refreshed on each key input
  public searchInput:string='';//stores user input from the searchbar

  public selectedPlant= {} as IPlants; //Stores the plant selected from the user for ngModel


  constructor(private fireDB:FirebaseDBService, private utilServ:UtilityService) { }


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




  public addToGarden(plant:IPlants): void{
    this.searchInput='';
      this.crop.name = plant.name;
      this.crop.thumbnail_url = plant.thumbnail_url;

      console.log(this.fireDB.GetCurrentUserData);
      this.fireDB.addNewDataToDB(`${this.fireDB.mainDBNodeRef}/${this.fireDB.userNodeRef}/${this.fireDB.userData.uid}/garden/${this.crop.name}`,this.crop)
      .then(promise=>{
        this.utilServ.presentToast(this.crop.name+ " was added to your garden successfully.");

      }).catch(err=>{
        this.utilServ.presentToast("Something went wrong");
      })
  }


}
