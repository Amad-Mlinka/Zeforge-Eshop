import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreInfoService } from '../store-info.service';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';

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
