import { Injectable } from '@angular/core';

import { Product } from '../../entities/Mob/product.entity';

@Injectable()
export class OstaloService {

    private products: Product[];

    constructor() {
        this.products = [
            {
                "id": 1,
                "name": "Sony Xperia Z2",
                "manufacturer": "Sony",
                "ram": "3 GB",
                "internal_memory": "16 GB",
                "cpu": "Quad-core 2.3 GHz Krait 400",
                "back_camera": "20.7 MP",
                "front_camera": "2.2 MP",
                "gpu": "Adreno 330",
                "battery": "3200 mAh",
                "battery_removable": false,
                "image": "http:\/\/cdn2.gsmarena.com\/vv\/pics\/sony\/sony-xperia-z2-2.jpg",
                "price": 490
              }, {
                "id": 2,
                "name": "Galaxy S5",
                "manufacturer": "Samsung",
                "ram": "2 GB",
                "internal_memory": "32 GB",
                "cpu": "Quad-core 2.5 GHz Krait 400",
                "back_camera": "16 MP",
                "front_camera": "2 MP",
                "gpu": "Adreno 330",
                "battery": "2800 mAh",
                "battery_removable": true,
                "image": "http:\/\/cdn2.gsmarena.com\/vv\/pics\/samsung\/samsung-galaxy-s5-g900f-1.jpg",
                "price": 430
              }, {
                "id": 3,
                "name": "LG Nexus 5",
                "manufacturer": "LG",
                "ram": "2 GB",
                "internal_memory": "16 GB",
                "cpu": "Quad-core 2.3 GHz Krait 400",
                "back_camera": "8 MP",
                "front_camera": "1.3 MP",
                "gpu": "Adreno 330",
                "battery": "2300 mAh",
                "battery_removable": false,
                "image": "http:\/\/cdn2.gsmarena.com\/vv\/pics\/lg\/lg-google-nexus-5-1.jpg",
                "price": 260
              }, {
                "id": 4,
                "name": "LG G2 mini",
                "manufacturer": "LG",
                "ram": "1 GB",
                "internal_memory": "8 GB",
                "cpu": "Quad-core 1.2 GHz Cortex-A7",
                "back_camera": "8 MP",
                "front_camera": "1.3 MP",
                "gpu": "Adreno 305",
                "battery": "2440 mAh",
                "battery_removable": true,
                "image": "http:\/\/cdn2.gsmarena.com\/vv\/pics\/lg\/lg-g2-mini-1.jpg",
                "price": 230
              }, {
                "id": 5,
                "name": "Sony Xperia M",
                "manufacturer": "Sony",
                "ram": "1 GB",
                "internal_memory": "4 GB",
                "cpu": "Dual-core 1 GHz Krait",
                "back_camera": "5 MP",
                "front_camera": "VGA",
                "gpu": "Adreno 305",
                "battery": "1750 mAh",
                "battery_removable": true,
                "image": "http:\/\/cdn2.gsmarena.com\/vv\/pics\/sony\/sony-xperia-m.jpg",
                "price": 110 
              }, {
                "id": 5,
                "name": "Galaxy Ace",
                "manufacturer": "Samsung",
                "ram": "278 MB",
                "internal_memory": "158 MB",
                "cpu": "800 MHz ARM 11",
                "back_camera": "5 MP",
                "front_camera": "no",
                "gpu": "Adreno 200",
                "battery": "1350 mAh",
                "battery_removable": true,
                "image": "http:\/\/cdn2.gsmarena.com\/vv\/pics\/samsung\/samsung-galaxy-ace-s5830-2.jpg",
                "price": 90
              }
              , {
                "id": 6,
                "name": "Asus Zenfone",
                "manufacturer": "Asus",
                "ram": "278 MB",
                "internal_memory": "158 MB",
                "cpu": "800 MHz ARM 11",
                "back_camera": "5 MP",
                "front_camera": "no",
                "gpu": "Adreno 200",
                "battery": "1350 mAh",
                "battery_removable": true,
                "image": "data:image/jpeg;base64,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",
                "price": 90
              }, {
                "id": 7,
                "name": "IPhone 4",
                "manufacturer": "Apple",
                "ram": "278 MB",
                "internal_memory": "158 MB",
                "cpu": "800 MHz ARM 11",
                "back_camera": "5 MP",
                "front_camera": "no",
                "gpu": "Adreno 200",
                "battery": "1350 mAh",
                "battery_removable": true,
                "image": "https://www.donanimhaber.com/images/images/haber/45905/conceptsr.jpg",
                "price": 90
              }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: number): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: number) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}