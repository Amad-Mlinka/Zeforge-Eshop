import { Injectable } from '@angular/core';
import { Tile } from './models/tile'

@Injectable({
  providedIn: 'root'
})
export class StoreInfoService {
  tiles : Tile[]=[
    {
      text:'Racunari',
      cols:2,
      rows:2,
      class:'one-tile',
      id:1,
    },
    {
      text:'Mobiteli',
      cols:1,
      rows:1,
      class:'two-tile',
      id:2,
    },
    {
      text:'Foto-Oprema',
      cols:1,
      rows:2,
      class:'three-tile',
      id:3
    },
    {
      text:'Gaming Oprema',
      cols:1,
      rows:2,
      class:'four-tile',
      id:4
    },
    {
      text:'Video Oprema',
      cols:2,
      rows:1,
      class:'five-tile',
      id:5
    },
    {
      text:'Ostalo',
      cols:1,
      rows:1,
      class:'six-tile',
      id:6
    }
];
  constructor() { }
}
