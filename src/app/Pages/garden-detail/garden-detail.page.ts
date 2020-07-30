import { Component, OnInit } from '@angular/core';
import { GardenCrop } from 'src/app/Interfaces/garden-crop';

@Component({
  selector: 'app-garden-detail',
  templateUrl: './garden-detail.page.html',
  styleUrls: ['./garden-detail.page.scss'],
})
export class GardenDetailPage implements OnInit {


  private gardenCrop = {} as GardenCrop;
  
  constructor() { }

  ngOnInit() {
  }



}
