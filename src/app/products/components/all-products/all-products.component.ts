import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],

})
export class AllProductsComponent implements OnInit {
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
