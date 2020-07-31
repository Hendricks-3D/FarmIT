import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GardenCrop } from 'src/app/Interfaces/garden-crop';
import { firestore } from 'firebase';
import { FirebaseDBService } from 'src/app/Services/firebase/firebase-db.service';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.page.html',
  styleUrls: ['./garden.page.scss'],
})
export class GardenPage implements OnInit {

  public imageUrl='../../../assets/carrots.jpg'


  public gardenCrops:GardenCrop[] = [];

  constructor(private route:Router,private fireDB:FirebaseDBService ) {
    
   }

  ngOnInit() {

    
  }
  ngAfterContentInit() {
    this.getAllGardenPlants();

    console.log(this.gardenCrops)
  }

  addCropToGarden():void{
      this.route.navigateByUrl('/tabs/addToGarden');
  }


  //Method that gets all the user plants in the garden
  private getAllGardenPlants():void
  {
      this.fireDB.getAllGardenPlants().snapshotChanges().subscribe(plants=>
        {
        plants.forEach(plant=>{
        this.gardenCrops.push(plant.payload.val() as GardenCrop);
        
       });
      });
    
  }




}
