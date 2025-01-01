import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    
    RouterModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
