import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

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
              }, {
                "id": 7,
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