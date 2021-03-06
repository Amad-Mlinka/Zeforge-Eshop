 import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../entities/Mob/item.entity';
import { ProductService } from '../services/mob/product.service';



@Component({
	templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {

	private items: Item[] = [];
	private total: number = 0;
	private numb: number=0;

	
	constructor(
		private activatedRoute: ActivatedRoute,
		private productService: ProductService
	) { }
	

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			let id = params['id'];
			if (id) {
				let item: Item = {
					product: this.productService.find(id),
					quantity: 1
				};
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (let i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.product.id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
				this.loadCart();
			} else {
				this.loadCart();
			}
		});
	}

	loadCart(): void {
		this.total = 0;
		this.items = [];
		
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (let i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.price * item.quantity;
			this.numb++;
		
		}
	}

	remove(id: number): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		
		for (let i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.numb=0;
		this.loadCart();
		
	}
	removeAll(): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		for (let i = 0; i <= cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
				cart.splice(0, cart.length);
				break;
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.numb=0;
		this.loadCart();
		


	}
	

}

