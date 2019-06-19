import { Injectable } from '@angular/core';

import { Komp } from '../../entities/Komp/product.entity';

@Injectable()
export class KompService {

    private kompi: Komp[];

    constructor() {
        this.kompi = [
            {
                "id": 8,
                "name":"I7 4770HQ GTX 1060 4 GB",
                "price": 490,
                "ram": "4 GB",
                "manufacturer": "Asus",
                "cpu": "I7 4770HQ",
                "gpu": "GTX 1060",
                "image": "http:\/\/cdn2.gsmarena.com\/vv\/pics\/sony\/sony-xperia-z2-2.jpg",
                
              }, {
                "id": 9,
                "name":"I5 2400 GTX 1080 8 GB",
                "ram": "8 GB",
                "manufacturer": "ROG",
                "cpu": "I5 2400",
                "gpu": "GTX 1080",
                "image": "http:\/\/cdn2.gsmarena.com\/vv\/pics\/sony\/sony-xperia-z2-2.jpg",
                "price": 690
              },{
                "id": 10,
                "name":"I3 8100 GTX 2050 12 GB" ,
                "ram": "12 GB",
                "manufacturer": "STRIX",
                "cpu": "I3 8100",
                "gpu": "GTX 2050",
                "image": "http:\/\/cdn2.gsmarena.com\/vv\/pics\/sony\/sony-xperia-z2-2.jpg",
                "price": 690
              },{
                "id": 11,
                "name":"C2Q 2.3GHZ GT 210 2 GB",
                "ram": "2 GB",
                "manufacturer": "DELL",
                "cpu": "C2Q 2.3GHZ",
                "gpu": "GT 210",
                "image": "http:\/\/cdn2.gsmarena.com\/vv\/pics\/sony\/sony-xperia-z2-2.jpg",
                "price": 120
              },{
                "id": 12,
                "name":"C2D Intel HD 2 GB",
                "ram": "2 GB",
                "manufacturer": "HP",
                "cpu": "C2D",
                "gpu": "Intel HD",
                "image": "http:\/\/cdn2.gsmarena.com\/vv\/pics\/sony\/sony-xperia-z2-2.jpg",
                "price": 150
              },
        ];
    }

    findAll(): Komp[] {
        return this.kompi;
    }

    find(id: number): Komp {
        return this.kompi[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: number) {
        for (var i = 0; i < this.kompi.length; i++) {
            if (this.kompi[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}