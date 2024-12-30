import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    HttpClientModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
