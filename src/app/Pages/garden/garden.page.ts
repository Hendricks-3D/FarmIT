import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.page.html',
  styleUrls: ['./garden.page.scss'],
})
export class GardenPage implements OnInit {

  public imageUrl='../../../assets/carrots.jpg'
  constructor(private route:Router ) { }

  ngOnInit() {
  }


  addCropToGarden():void{
      this.route.navigateByUrl('/tabs/addToGarden');
  }

}
