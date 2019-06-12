import { Injectable } from '@angular/core';
import { Tile } from './models/tile'

@Injectable({
  providedIn: 'root'
})
export class StoreInfoService {
  tiles : Tile[]=[
    {
      text:'Racunari',
      value:"komp",
      cols:2,
      rows:2,
      class:'one-tile',
      id:1,
    },
    {
      text:'Mobiteli',
      value:"/mob",
      cols:1,
      rows:1,
      class:'two-tile',
      id:2,
    },
    {
      text:'Foto-Oprema',
      value:"/foto",
      cols:1,
      rows:2,
      class:'three-tile',
      id:3
    },
    {
      text:'Gaming Oprema',
      value:"/game",
      cols:1,
      rows:2,
      class:'four-tile',
      id:4
    },
    {
      text:'Video Oprema',
      value:"/video",
      cols:2,
      rows:1,
      class:'five-tile',
      id:5
    },
    {
      text:'Ostalo',
      value:"/ostalo",
      cols:1,
      rows:1,
      class:'six-tile',
      id:6
    }
];
  constructor() { }
}
