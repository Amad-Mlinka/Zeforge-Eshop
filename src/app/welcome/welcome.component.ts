import { Component, OnInit } from '@angular/core';
import { StoreInfoService } from '../store-info.service'
import { Tile } from '../models/tile';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
tiles:Tile[];
  constructor(private storeInfo:StoreInfoService) { }

  ngOnInit() {
    console.log(this.storeInfo);
    this.tiles=this.storeInfo.tiles;
  }

}
