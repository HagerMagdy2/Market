import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],

})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.getProducts()
    this.getCategories()
  
  }
  getProducts() {
    this.productsService.getAllProducts().subscribe((res: any) => {
      this.products = res 
      console.log(this.products)
    }, error => {
      alert(error.message)
    })
  }
  getCategories(){
    this.productsService.getAllCategories().subscribe((res: any) => {
      this.categories = res
      console.log(this.categories)
    }, error => {
      console.log(error.message)
    })
  }
getListByCatName(selectedCat:string){
  this.productsService.getProductsByCategory(selectedCat).subscribe((res: any) => {
  this.products = res
  console.log(this.products)
  }, error => {
    console.log(error.message)
  })
}
filterCategory(event:any){
  let value=event.target.value
  console.log(value)
  if(value=='All'){
    this.getProducts()
  }else{
    this.getListByCatName(value)
  }  


}
}
