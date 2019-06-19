import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/Mob/product.entity';
import { ProductService } from '../../services/mob/product.service';

@Component({
	selector:'table-striped',
	templateUrl: 'product.component.html',
	styleUrls: ['./product.component.css']
	
})

export class ProductComponent implements OnInit {

	private products: Product[];

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		this.products = this.productService.findAll();
	}


}
