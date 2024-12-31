import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';


@NgModule({
  declarations: [AllProductsComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [AllProductsComponent],
  imports: [CommonModule]
})
export class ProductsModule { }
