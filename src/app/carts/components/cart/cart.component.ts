import { Component } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
products:any[]=[];

  constructor(private productsService:ProductsService) { 
  }

  ngOnInit() {
  this.getProducts()
  }
  getProducts(){
    this.productsService.getAllProducts().subscribe((res:any)=>{
    this.products = res
    console.log(this.products)
    })
  }
}
