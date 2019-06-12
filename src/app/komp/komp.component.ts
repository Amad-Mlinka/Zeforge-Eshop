import { Component, OnInit } from '@angular/core';
import { Komp } from '../entities/Komp/product.entity';
import { KompService } from '../services/komp/komp.service';

@Component({
	selector:'table-striped',
	templateUrl: './komp.component.html',
	styleUrls: ['./komp.component.css']
	
	
})

export class KompComponent implements OnInit {

	private kompi: Komp[];

	constructor(
		private kompService: KompService
	) { }

	ngOnInit() {
		this.kompi = this.kompService.findAll();
	}


}
