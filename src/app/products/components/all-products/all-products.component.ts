import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],

})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading:boolean = false;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.getProducts()
    this.getCategories()
  
  }
  getProducts() {
    this.loading = true;
    this.productsService.getAllProducts().subscribe((res: any) => {
      this.loading = false; 
      this.products = res 
      console.log(this.products)
    }, error => {
      this.loading = false; 
      alert(error.message)
    })
  }
  getCategories(){
    this.loading=true
    this.productsService.getAllCategories().subscribe((res: any) => {
      this.loading = false;
      this.categories = res
      console.log(this.categories)
    }, error => {
      this.loading = false;
      console.log(error.message)
    })
  }
getListByCatName(selectedCat:string){
  this.loading = true;  
  this.productsService.getProductsByCategory(selectedCat).subscribe((res: any) => {
    this.loading = false;  
  this.products = res
  console.log(this.products)
  }, error => {
    this.loading = false;  
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
