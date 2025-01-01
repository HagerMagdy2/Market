import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [HeaderComponent, SpinnerComponent],
  imports: [
    
    RouterModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  exports: [HeaderComponent,SpinnerComponent]
})
export class SharedModule { }
